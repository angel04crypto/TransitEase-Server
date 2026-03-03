#TransitEase — Travel Aggregation Platform

TransitEase is a full-stack MERN travel aggregation platform that allows users to search, compare, and initiate bookings for multiple transport modes (Trains, Buses, Flights, and Cars) and securely redirects them to official provider websites for final payment.

This project demonstrates authentication, protected APIs, booking persistence, and scalable backend architecture.


#Features
•Multi-Transport Search (Train, Bus, Flight, Car)
•Advanced Filtering (price, rating, departure time, transport type)
•Secure Provider Redirection Workflow
•Firebase Authentication (Email/Password)
•Protected Backend Routes (Firebase Admin Verification)
•Booking Persistence in MongoDB
•User-Specific Travel Dashboard
•Large Seeded Dataset (500+ routes for demo realism)
•Responsive UI with modern design


#Tech Stack
•Frontend: React.js, React Router, Tailwind CSS, Axios, Firebase, Framer Motion, Lucide React
•Backend: Node.js, Express, MongoDB Atlas, Mongoose, Firebase Admin SDK
•Authentication: Firebase Authentication


Project Structure

TransitEase/
├── client/                # Vite-based React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── context/       # Authentication context
│   │   ├── firebase/      # Firebase client configuration
│   │   ├── pages/         # Application views (Home, Results, Details, MyTrips)
│   │   └── services/      # Axios API instance with token interceptor
│
├── server/                # Node.js/Express backend
│   ├── config/            # Database & Firebase Admin configuration
│   ├── controllers/       # Business logic handlers
│   ├── middleware/        # Auth middleware (verifyToken, adminOnly)
│   ├── models/            # Mongoose schemas (User, Transport, Booking)
│   ├── routes/            # REST API endpoints
│   ├── seed.js            # Route dataset generator (500+ dynamic routes)
│   └── index.js           # Application entry point


#System Architecture Flow
•User authenticates via Firebase.
•Frontend fetches filtered routes from backend.
•Backend queries MongoDB with dynamic filters.
•User initiates booking.
•Booking record is stored in MongoDB with lifecycle status.
•User is redirected to official provider website for final payment.
•User can view booking history in protected dashboard.

This architecture supports future integration of real-time APIs and payment gateways.


#Setup Instructions

Prerequisites
•Node.js (v16+)
•MongoDB Atlas or Local MongoDB
•Firebase Project (Client + Admin SDK)

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


#Environment Variables
Server (.env)
•MONGODB_URI
•PORT
•FIREBASE_SERVICE_ACCOUNT_KEY

Client (.env)
•VITE_API_BASE_URL
•Firebase configuration variables


#Deployment
•Frontend: Vercel
•Backend: Render / Railway
•Database: MongoDB Atlas


#Future Scope
•Real-time provider API integration
•Payment gateway integration
•Booking confirmation via webhook
•Dynamic pricing engine refinement
•Admin analytics dashboard


Developed as a scalable full-stack travel aggregation system demonstrating secure authentication, RESTful API design, and protected booking workflows.