import express from 'express';
import { sendMessage, getMessage } from '../controllers/message.controller.js';
import protectRouter from '../middleware/protectRoute.js';

 

const router = express.Router();

router.get("/:id", protectRouter, getMessage)
router.post("/send/:id", protectRouter, sendMessage)

export default router;