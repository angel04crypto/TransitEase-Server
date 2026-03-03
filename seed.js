const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Transport = require('./models/Transport');

dotenv.config();

const hubs = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata"];

const secondaryCities = [
  "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Bhubaneswar",
  "Indore", "Chandigarh", "Nagpur", "Visakhapatnam",
  "Kochi", "Coimbatore", "Patna", "Surat", "Bhopal"
];

const regionalCities = [
  "Mysore", "Vijayawada", "Ranchi", "Guwahati", "Varanasi",
  "Noida", "Thane", "Mangalore", "Trivandrum", "Jammu",
  "Amritsar", "Agra", "Udaipur", "Jodhpur", "Gwalior",
  "Raipur", "Dehradun", "Srinagar", "Shillong", "Kanpur"
];

const providers = {
  flight: [
    { name: "IndiGo", basePrice: 5000, url: "https://www.goindigo.in" },
    { name: "Air India", basePrice: 5500, url: "https://www.airindia.com" },
    { name: "SpiceJet", basePrice: 4800, url: "https://www.spicejet.com" }
  ],
  train: [
    { name: "Rajdhani Express", basePrice: 1800, url: "https://www.irctc.co.in" },
    { name: "Shatabdi Express", basePrice: 1200, url: "https://www.irctc.co.in" }
  ],
  bus: [
    { name: "RedBus Volvo", basePrice: 1500, url: "https://www.redbus.in" },
    { name: "APSRTC", basePrice: 1000, url: "https://www.redbus.in" }
  ],
  car: [
    { name: "Uber Intercity", basePrice: 3500, url: "https://www.uber.com/in/en/" },
    { name: "Ola Outstation", basePrice: 3200, url: "https://www.olacabs.com" }
  ]
};

function generatePrice(base) {
  const variation = Math.floor(Math.random() * 1200) - 600;
  return Math.max(base + variation, 500);
}

function generateDuration(type) {
  if (type === "flight") return "2h 30m";
  if (type === "train") return "12h 00m";
  if (type === "bus") return "8h 00m";
  return "4h 00m";
}

function generateTime() {
  const hour = Math.floor(Math.random() * 12) + 1;
  const minute = Math.floor(Math.random() * 60).toString().padStart(2, '0');
  const ampm = Math.random() > 0.5 ? "AM" : "PM";
  return `${hour}:${minute} ${ampm}`;
}

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected for seeding...");

    await Transport.deleteMany({});
    console.log("Old transports cleared.");

    const allRoutes = [];

    function addRoute(type, from, to) {
      providers[type].forEach(provider => {
        allRoutes.push({
          type,
          provider: provider.name,
          vehicleNumber: type.toUpperCase() + "-" + Math.floor(Math.random() * 999),
          source: from,
          destination: to,
          departureTime: generateTime(),
          arrivalTime: generateTime(),
          duration: generateDuration(type),
          price: generatePrice(provider.basePrice),
          seatsAvailable: Math.floor(Math.random() * 40) + 10,
          rating: (4 + Math.random()).toFixed(1),
          amenities: ["AC", "Comfort Seating"],
          redirectUrl: provider.url
        });
      });
    }

    // Hub ↔ Hub (Flights only)
    hubs.forEach((from, i) => {
      hubs.slice(i + 1).forEach(to => {
        addRoute("flight", from, to);
        addRoute("flight", to, from);
      });
    });

    // Hub ↔ Secondary (Flight + Train)
    hubs.forEach(hub => {
      secondaryCities.slice(0, 6).forEach(city => {
        ["flight", "train"].forEach(type => {
          addRoute(type, hub, city);
          addRoute(type, city, hub);
        });
      });
    });

    // Secondary ↔ Regional (Train + Bus)
    secondaryCities.slice(0, 8).forEach(sec => {
      regionalCities.slice(0, 5).forEach(reg => {
        ["train", "bus"].forEach(type => {
          addRoute(type, sec, reg);
          addRoute(type, reg, sec);
        });
      });
    });

    // Short Distance Cars
    const shortRoutes = [
      ["Pune", "Mumbai"],
      ["Delhi", "Agra"],
      ["Bangalore", "Mysore"],
      ["Hyderabad", "Vijayawada"]
    ];

    shortRoutes.forEach(pair => {
      addRoute("car", pair[0], pair[1]);
      addRoute("car", pair[1], pair[0]);
    });

    await Transport.insertMany(allRoutes);
    console.log("Generated routes:", allRoutes.length);
    console.log("Sample transports added!");

    await mongoose.connection.close();
    console.log("Connection closed.");
    process.exit(0);

  } catch (err) {
    console.error("Seeding Error:", err);
    process.exit(1);
  }
};

seedDB();