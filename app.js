import express from 'express'
import {router} from './routers/tasks.js'
import {conectTODB} from './db/connect.js'
import { notFound } from './middleware/notFound.js'
import 'dotenv/config'
import { errorHandler } from './middleware/error-hander.js'

//instaances
const app = express()
const port = process.env.PORT || 3001

//middle wares
app.use(express.json())
app.use(notFound)
app.use(errorHandler)


//routes
app.get('/', (req, res) => {
    res.send('hello tasks')
})
app.use('/api/v1/tasks', router)

const start = async () => {
    try {
        await conectTODB(process.env.MONGO_URI)
        app.listen(port, () =>{
            console.log(`app listening on port ${port}`)
        })
    }
    catch(error) {
        console.log(error)
    }
}

start()
