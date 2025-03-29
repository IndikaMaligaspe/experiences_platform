# Experiences B2B API Sandbox

This project is a mock sandbox for the **Experiences B2B API**, which enables:

- Suppliers to push experiences, pricing, and availability (**API-IN**)
- Distribution partners (OTAs, travel platforms) to search and book experiences (**API-OUT**)

It uses Express.js and serves mock data from JSON files. No database is required at this stage.

---

## 🔧 Tech Stack

- Node.js + Express
- Swagger UI for API documentation
- Mock data stored in JSON files

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install

```

### 2. Start server

```bash
node src/app.js

```

---

## 📘 API Documentation

Visit http://localhost:4000/docs to explore the API in Swagger UI. The spec follows OpenAPI 3.0.3 and includes:

- Activity submission
- Real-time availability lookup
- Mock data stored in JSON files
- Search with filters
- Booking and booking status
- Edge cases (blackout dates, overbooking prevention, status filtering)

---

## 📁 Project Structure

```pgsql
src/
├── app.js # Entry point
├── openapi.yaml # Full OpenAPI 3.0.3 spec
├── routes/ # API route handlers
│ ├── activities.js
│ ├── search.js
│ └── bookings.js
├── mock/ # Sample JSON data
│ ├── activities.json
│ ├── availability.json
│ └── bookings.json
```

---

## 🧪 Sample Test Queries

- GET /search?location=Lukla&category=Adventure

- GET /activities/everest-trek-001

- GET /activities/everest-trek-001/availability

- GET /bookings/booking-001/status

---

## 📦 Next Steps (Future Phase)

- Add database and ORM (e.g., PostgreSQL + Prisma)

- Implement authentication (API key or OAuth2)

- Webhook callbacks

- Partner rate-limiting and analytics

---
