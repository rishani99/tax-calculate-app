const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/TaxCalculate', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ Connected to MongoDB");
}).catch((err) => {
  console.error("❌ MongoDB connection failed", err);
});

// Importing routes
const companyRoute = require('./routes/CompanyRegister');
const foreignCompanyRoute = require('./routes/ForeignCompanyRegister');
const groupCompanyRoute = require('./routes/GroupCompanyRegister');
const individualRoute = require('./routes/IndividualRegister');

// Routes
app.use('/api/register/company', companyRoute);
app.use('/api/register/foreigncompany', foreignCompanyRoute);
app.use('/api/register/groupcompany', groupCompanyRoute);
app.use('/api/register/individual', individualRoute);

// Root route
app.get('/', (req, res) => {
  res.send('🚀 Tax System API Working!');
});

// Server Start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
