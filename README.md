##TransitEase — Travel Aggregation Platform

TransitEase is a full-stack MERN travel aggregation platform that allows users to search, compare, and initiate bookings for multiple transport modes (Trains, Buses, Flights, and Cars) and securely redirects them to official provider websites for final payment.

This project demonstrates authentication, protected APIs, booking persistence, and scalable backend architecture.


##Features
1. Multi-Transport Search (Train, Bus, Flight, Car)
2. Advanced Filtering (price, rating, departure time, transport type)
3. Secure Provider Redirection Workflow
4. Firebase Authentication (Email/Password)
5. Protected Backend Routes (Firebase Admin Verification)
6. Booking Persistence in MongoDB
7. User-Specific Travel Dashboard
8. Large Seeded Dataset (500+ routes for demo realism)
9. Responsive UI with modern design


##Tech Stack
•Frontend: React.js, React Router, Tailwind CSS, Axios, Firebase, Framer Motion, Lucide React
•Backend: Node.js, Express, MongoDB Atlas, Mongoose, Firebase Admin SDK
•Authentication: Firebase Authentication

## Project Structure

```bash
TransitEase/
├── client/                        # Vite-based React frontend
│   ├── src/
│   │   ├── components/            # Reusable UI components
│   │   ├── context/               # Authentication context
│   │   ├── firebase/              # Firebase client configuration
│   │   ├── pages/                 # Application views (Home, Results, Details, MyTrips)
│   │   └── services/              # Axios API instance with token interceptor
│
├── server/                        # Node.js / Express backend
│   ├── config/                    # Database & Firebase Admin configuration
│   ├── controllers/               # Business logic handlers
│   ├── middleware/                # Auth middleware (verifyToken, adminOnly)
│   ├── models/                    # Mongoose schemas (User, Transport, Booking)
│   ├── routes/                    # REST API endpoints
│   ├── seed.js                    # Route dataset generator (500+ dynamic routes)
│   └── index.js                   # Application entry point
```

---

## System Architecture Flow

1. User authenticates via Firebase.
2. Frontend sends filtered route requests to backend.
3. Backend queries MongoDB with dynamic filters.
4. User initiates booking.
5. Booking record is stored in MongoDB with lifecycle status.
6. User is redirected to official provider website for payment.
7. User can view booking history inside protected dashboard.

This architecture supports future integration of real-time provider APIs and payment gateways.


##Setup Instructions

Prerequisites
1. Node.js (v16+)
2. MongoDB Atlas or Local MongoDB
3. Firebase Project (Client + Admin SDK)

Backend Setup
cd server
npm install
node seed.js
npm run dev

Server runs on:
http://localhost:5000

Frontend Setup
cd client
npm install
npm run dev

Frontend runs on:
http://localhost:5174


##Environment Variables
Server (.env)
1. MONGODB_URI
2. PORT
3. FIREBASE_SERVICE_ACCOUNT_KEY

Client (.env)
1. VITE_API_BASE_URL
2. Firebase configuration variables


##Deployment
1. Frontend: Vercel
2. Backend: Render / Railway
3. Database: MongoDB Atlas


##Future Scope
1. Real-time provider API integration
2. Payment gateway integration
3. Booking confirmation via webhook
4. Dynamic pricing engine refinement
5. Admin analytics dashboard


Developed as a scalable full-stack travel aggregation system demonstrating secure authentication, RESTful API design, and protected booking workflows.
