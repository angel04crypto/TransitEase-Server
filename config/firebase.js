const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config();

// The user must provide a complete service account key as a JSON file or path
// For convenience, we'll try to load it from an environment variable string first
try {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
    console.log('Firebase Admin Initialized');
} catch (err) {
    console.error('Firebase Admin Error: Ensure FIREBASE_SERVICE_ACCOUNT_KEY env is set correctly.');
}

module.exports = admin;
