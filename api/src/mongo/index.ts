import mongoose from 'mongoose';

const MONGO_DB_URL =
  process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017/todo-app';

export const connectDB = () => {
  mongoose
    .connect(MONGO_DB_URL)
    .then(() => {
      console.log(`[+] MONGO DB CONNECTED TO ${MONGO_DB_URL}`);
    })
    .catch((err) => {
      console.log(`[-] MONGO DB FAILED TO CONNECT TO ${MONGO_DB_URL}`);
      console.log('--\n', err);
      process.exit(1);
    });
};
