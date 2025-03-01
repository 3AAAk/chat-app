import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import messageRoutes from './routes/message.routes.js'
import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from "./db/connectToMongoDB.js";
import userRoutes from './routes/user.routes.js'


import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });


const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();


app.use(express.json());
app.use(cookieParser());


app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)
  
  

app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`Server listening on ${PORT}`)

})
