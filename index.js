const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/Products');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection (using remote MongoDB Atlas)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Database connected'))
.catch(err => console.error('Database connection error:', err));

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce API');
});

// Routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes);

// 404 Error Handler
app.use((req, res) => {
  res.status(404).send('Endpoint not found');
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
