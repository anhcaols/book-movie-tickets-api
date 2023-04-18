import 'express-async-errors';

import { Router } from 'express';
import { authMiddlewareByAdmin } from '../middlewares/auth.middleware.js';
import {
  createScheduleController,
  deleteScheduleController,
  getAllScheduleByMovieController,
  getAllScheduleController,
  updateScheduleController,
} from '../controllers/schedule.controller.js';

export const scheduleRouter = Router();

scheduleRouter.post('/all-schedules', getAllScheduleController);
scheduleRouter.post('/schedules', authMiddlewareByAdmin(), createScheduleController);
scheduleRouter.post('/all-schedules/movie', getAllScheduleByMovieController);
scheduleRouter.delete('/schedules/:id', authMiddlewareByAdmin(), deleteScheduleController);
scheduleRouter.patch('/schedules/:id', authMiddlewareByAdmin(), updateScheduleController);
