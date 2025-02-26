import express from "express";
import dotenv from "dotenv"
import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from "./db/connectToMongoDB.js";

const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("Hello WORLD")
})


app.use("/api/auth", authRoutes)
 
app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`Server listening on ${PORT}`)

})
