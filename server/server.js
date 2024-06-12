const express = require('express');
const connectDB = require('./config/database');
const awningRoutes = require('./routes/awningRoutes');
const windDataRoutes = require('./routes/windDataRoutes');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Connect Database
const sequelize = require('./config/database');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    console.log('Database synchronized.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.use(cors());
// Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/awnings', awningRoutes);
app.use('/api/wind-data', windDataRoutes);

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));