import express from 'express';
import { connectDB } from './mongo';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[+] SERVER STARTED AT PORT ${PORT} 🚀`);
  console.log(`[i] http://localhost:${PORT}`);
  connectDB();
});
