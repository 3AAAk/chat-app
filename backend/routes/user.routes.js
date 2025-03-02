import express from 'express';
import protectRouter from '../middleware/protectRoute.js';

import { getUsersForSidebar } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', protectRouter , getUsersForSidebar)

export default router;