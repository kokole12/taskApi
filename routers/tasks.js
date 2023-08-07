import express from 'express';
import {
  getAllTasks,
  createTask,
  getSingleTask,
  deleteTask,
  updateDateTask
} from '../controllers/tasks.js';
export const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getSingleTask).delete(deleteTask).patch(updateDateTask);
