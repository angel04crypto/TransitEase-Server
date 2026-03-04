# TransitEase — Travel Aggregation Platform

TransitEase is a **full-stack MERN travel aggregation platform** that allows users to search, compare, and initiate bookings for multiple transport modes (Trains, Buses, Flights, and Cars) and securely redirects them to official provider websites for final payment.

The project demonstrates **authentication, protected APIs, booking persistence, and scalable backend architecture**.

---

# 🌍 Live Deployment

Frontend
https://transit-ease-client.vercel.app

Backend API
https://transitease-server-production.up.railway.app

API Example
https://transitease-server-production.up.railway.app/api/transports

---

# ✨ Features

• Multi-Transport Search (Train, Bus, Flight, Car)
• Advanced Filtering (Price, Rating, Departure Time, Transport Type)
• Secure Provider Redirection Workflow
• Firebase Authentication (Email / Password)
• Protected Backend Routes (Firebase Admin Verification)
• Booking Persistence in MongoDB
• User-Specific Travel Dashboard
• Large Seeded Dataset (500+ routes)
• Responsive UI with modern design

---

# 🧰 Tech Stack

### Frontend

React.js
React Router
Tailwind CSS
Axios
Firebase
Framer Motion
Lucide React

### Backend

Node.js
Express.js
MongoDB Atlas
Mongoose
Firebase Admin SDK

### Authentication

Firebase Authentication

---

# 📁 Project Structure

```
TransitEase/
├── client/                        # Vite-based React frontend
│   ├── src/
│   │   ├── components/            # Reusable UI components
│   │   ├── context/               # Authentication context
│   │   ├── firebase/              # Firebase client configuration
│   │   ├── pages/                 # App pages (Home, Results, Details, MyTrips)
│   │   └── services/              # Axios API instance
│
├── server/                        # Node.js / Express backend
│   ├── config/                    # Database & Firebase Admin config
│   ├── controllers/               # Business logic
│   ├── middleware/                # Auth middleware
│   ├── models/                    # MongoDB schemas
│   ├── routes/                    # REST API routes
│   ├── seed.js                    # Dataset generator
│   └── index.js                   # Server entry point
```

---

# ⚙️ System Architecture Flow

1. User authenticates using Firebase Authentication.
2. Frontend sends filtered transport search requests to backend.
3. Backend queries MongoDB using dynamic filters.
4. User selects a transport option and initiates booking.
5. Booking record is stored in MongoDB with lifecycle status.
6. User is redirected to the official provider website for payment.
7. Booking history can be viewed inside the protected dashboard.

This architecture allows easy future integration with **real-time transport APIs and payment gateways**.

---

# 🖥️ Local Development Setup

## Prerequisites

Node.js (v16+)
MongoDB Atlas or Local MongoDB
Firebase Project (Client + Admin SDK)

---

## Backend Setup

```
cd server
npm install
node seed.js
npm run dev
```

Server runs on:

http://localhost:5000

---

## Frontend Setup

Open a new terminal:

```
cd client
npm install
npm run dev
```

Frontend runs on:

http://localhost:5174

---

# 🔐 Environment Variables

### Server (.env)

MONGODB_URI
PORT
FIREBASE_SERVICE_ACCOUNT_KEY

### Client (.env)

VITE_API_BASE_URL
Firebase configuration variables

---

# 🚀 Deployment

Frontend — Vercel
Backend — Railway
Database — MongoDB Atlas

---

# 🔮 Future Scope

• Real-time provider API integration
• Payment gateway integration
• Booking confirmation via webhook
• Dynamic pricing engine
• Admin analytics dashboard

---

Developed as a **scalable full-stack travel aggregation system** demonstrating secure authentication, RESTful API design, and protected booking workflows.
