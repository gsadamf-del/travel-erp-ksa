const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const PORT = process.env.PORT || 3000;
const DATA_FILE = __dirname + '/data/sample-data.json';

const app = express();
app.use(cors());
app.use(bodyParser.json());

let data = { users: [], trips: [] };
try {
  data = JSON.parse(fs.readFileSync(DATA_FILE));
} catch (e) {
  console.warn('Could not read sample data, starting with empty data.');
}

app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Simple mock auth: accepts any email/password and returns a mock token
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: 'email and password required' });

  let user = data.users.find(u => u.email === email);
  if (!user) {
    user = { id: uuidv4(), name: email.split('@')[0], email };
    data.users.push(user);
  }

  return res.json({ token: 'mock-jwt-token', user });
});

app.get('/users', (req, res) => res.json(data.users));

app.get('/trips', (req, res) => res.json(data.trips));

app.get('/trips/:id', (req, res) => {
  const t = data.trips.find(tr => tr.id === req.params.id);
  if (!t) return res.status(404).json({ error: 'trip not found' });
  res.json(t);
});

app.post('/trips', (req, res) => {
  const trip = req.body;
  if (!trip || !trip.title) return res.status(400).json({ error: 'trip.title required' });
  trip.id = uuidv4();
  data.trips.push(trip);
  res.status(201).json(trip);
});

// optional: persist changes on exit (best effort)
function saveData() {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    console.log('Saved sample data');
  } catch (e) {
    console.warn('Failed to save sample data', e.message);
  }
}
process.on('SIGINT', () => { saveData(); process.exit(); });
process.on('SIGTERM', () => { saveData(); process.exit(); });

app.listen(PORT, () => console.log(`Mock backend listening on http://0.0.0.0:${PORT}`));
