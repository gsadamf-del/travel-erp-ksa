Mock Express backend for development and testing of the Travel ERP Flutter app.

How to run locally
1. Ensure Node.js (>=16) is installed.
2. In the repository root or CI environment run:
   cd backend/mock
   npm install
   npm start

This starts the mock server on port 3000 by default.

Available endpoints
- GET  /health         -> { status: 'ok' }
- POST /auth/login     -> body: { email, password } -> { token: 'mock-jwt-token', user }
- GET  /users          -> list of users
- GET  /trips          -> list of trips
- GET  /trips/:id      -> trip details
- POST /trips          -> create trip (body should include at least title)

Using with the Flutter app
- Point your app's API base URL to the mock server. If running locally on the same machine as the Flutter app use:
  http://localhost:3000
- To test from a real device, replace localhost with your machine LAN IP, e.g.:
  http://192.168.1.100:3000
  or use a tunnel like ngrok:
  ngrok http 3000

Notes
- This mock is intentionally simple and stores data in memory backed by data/sample-data.json.
- It accepts any credentials for /auth/login and returns a fixed mock token.
