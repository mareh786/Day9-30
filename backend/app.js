import express from 'express';
import cors from 'cors';
import registerRoutes from './routes/registerRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/register', registerRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
