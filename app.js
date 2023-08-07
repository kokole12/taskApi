import express from 'express'
import {router} from './routers/tasks.js'
import {conectTODB} from './db/connect.js'
import 'dotenv/config'


const app = express()
const port = 3001

app.use(express.json())

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
