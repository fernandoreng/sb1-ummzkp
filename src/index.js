import express from 'express';
import cors from 'cors';
import { sequelize } from './models/index.js';
import routes from './routes/index.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronized');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});