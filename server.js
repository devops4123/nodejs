const express = require('express');
const app = express();

// Load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON requests
app.use(express.json());

// Import routes
const admin = require("./router/admin/admin.route.js");
const user = require("./router/web/user.route.js")
// Mount todo API routes with correct path
app.use("/api/admin", admin); 
app.use("/api/user", user);

// DB connection
const dbconnect = require('./config/database.js');

// Start the server
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`); 
    dbconnect();
});

// Default route
app.get('/', (req, res) => {
    res.send("Default Route");
});
