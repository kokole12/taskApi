import mongoose from 'mongoose'


const TaskSchema = new mongoose.Schema({
    name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'Name must be atmost 20 characters']
},
    completed: {
        type: Boolean,
        default: false
    }
})

export const Task = mongoose.model('Task', TaskSchema)
