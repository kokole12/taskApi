import { Task } from '../models/task.js';

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ messge: error });
  }
};

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      res.status(404).json({ mesage: 'No task found' });
    }
    res.status(200).json(task);
  } catch (error) {
        res.status(500).json({ message: error });
  }
};

export const updateDateTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task =await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new:true, runValidators: true
        })
        if (!task){
            res.status(404).json({message: 'not found'})
        }
        res.status(200).json(task)
        
    } catch (error) {
        res.status(500).json({mesasage: error})
    }

};

export const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });

    res.status(200).json({t})
    if (!task) {
      res.status(404).json({ message: 'not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error});
  }
};
