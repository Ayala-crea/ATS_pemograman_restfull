const express = require('express');
const dbPool = require('./src/config/database');
const authRoutes = require('./src/routes/authRoutes');
const makananRoutes = require('./src/routes/makananRoutes');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/makanan', makananRoutes);

app.listen(4000, () => {
    console.log(`listening on port 4000`);
  });
