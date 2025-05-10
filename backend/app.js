import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import registerRoutes from './routes/registerRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/register', registerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
