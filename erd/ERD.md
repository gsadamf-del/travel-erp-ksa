Entities (ERD) - Travel ERP (textual)

الكائنات الأساسية وحقول مقترحة:

1) Customers (جهات/عملاء)
  - id (PK)
  - name
  - phone
  - passport_number
  - default_currency
  - address
  - created_at, updated_at

2) Services/Bookings (حجوزات/خدمات)
  - id (PK)
  - customer_id (FK)
  - booking_ref
  - service_type
  - visa_source
  - agent
  - delegation_office
  - driver_name
  - currency
  - cost_amount
  - profit_amount
  - total_amount
  - amount_received
  - amount_due
  - status
  - date
  - created_at, updated_at

3) Invoices (فواتير العملاء)
  - id
  - invoice_number
  - customer_id
  - date
  - due_date
  - currency
  - exchange_rate
  - subtotal
  - tax_amount
  - total
  - status

4) Suppliers (موردون)
5) Purchases (فواتير مورد)
6) Accounts (شجرة الحسابات - COA)
  - account_number
  - name
  - type (Asset, Liability, Equity, Revenue, Expense)
  - parent_account

7) JournalEntries (قيود يومية)
  - id
  - date
  - description
  - lines (debit/credit entries linked to account)

8) Payments
  - id
  - invoice_id / purchase_id
  - amount
  - method (Cash/Bank/Card)
  - date

9) ExchangeRates
  - id
  - currency_code
  - rate_to_base
  - date

10) Users, Roles, AuditLogs, SyncQueue (for offline sync)

هذه الوثيقة تمهيدية وستتحول إلى مخطط ERD مرئي في المرحلة التالية مع الmigrations.
