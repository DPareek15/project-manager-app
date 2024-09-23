import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import projectRoutes from './routes/projectRoutes';

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('This is home route');
});
app.use('/projects', projectRoutes);

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
