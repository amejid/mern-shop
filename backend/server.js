import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import {errorHandler, notFound} from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";

connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express!');
})

app.use('/api/products', productRoutes);

app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`));