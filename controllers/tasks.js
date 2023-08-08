import { Task } from '../models/task.js';
import { asyncWrapper } from '../middleware/async.js';
import { CustomApiError, createCustomError } from '../errors/custom-error.js';

export const getAllTasks =asyncWrapper( async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
});

export const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

export const getSingleTask = asyncWrapper (async (req, res, next) => {
  
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError('No task found', 404))
  }
  res.status(200).json(task);
});

export const updateDateTask = asyncWrapper(async (req, res) => {
   
  const {id:taskID} = req.params
  const task =await Task.findOneAndUpdate({_id:taskID}, req.body, {
      new:true, runValidators: true
  })
  if (!task){
    return next(createCustomError('No task found', 404))
  }
  res.status(200).json(task)
});

export const deleteTask = asyncWrapper (async (req, res) => {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });

    res.status(200).json({t})
    if (!task) {
      return next(createCustomError('No task found', 404))
    }
    res.status(200).json(task);
});

export const editTask = asyncWrapper(async (req, res) => {
    const {id: taskID} = req.params;
    const task = await Task.findByIdAndUpdate({_id: taskID}, req.body,
      {new:true, runValidators:true, overwrite: true})
    
    if (!task) {
      return next(createCustomError('No task found', 404))
    }
    res.status(200).json(task)
})
