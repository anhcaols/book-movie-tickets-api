import 'express-async-errors';

import { Router } from 'express';
import { authMiddlewareByAdmin } from '../middlewares/auth.middleware.js';
import { createSeatController } from '../controllers/seat.controller.js';

export const seatRouter = Router();

seatRouter.post('/seats', authMiddlewareByAdmin(), createSeatController);
