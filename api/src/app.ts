import express from 'express';
import cors from 'cors';
import { connectDB } from './mongo';
import { router } from './routes/todo';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/todo', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[+] SERVER STARTED AT PORT ${PORT} 🚀`);
  console.log(`[i] http://localhost:${PORT}`);
  connectDB();
});
