import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config({
  path: '.env'
})
import connectDB from './config/db.js';

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});