const express = require('express');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();
require('./config/passport'); // Passport configuration

const app = express();

// Configure session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Use authentication routes
app.use(authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
