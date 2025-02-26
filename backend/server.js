import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from "./db/connectToMongoDB.js";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });


const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
    res.send("Hello WORLD");
  });
  
  

app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`Server listening on ${PORT}`)

})
