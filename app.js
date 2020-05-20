const express = require('express')
const app = express()

app.use(express.json())
app.set('port', process.env.PORT || 8000)

const studentsRouter = require('./routes/students')
const gradesRouter = require('./routes/grades')
//when we receive a get request at the root'/' we send the message
app.get('/', (req, res)=>{
    res.send('welcome to the app')
    req.send(req.query)
})

app.use('/students', studentsRouter)
app.use('/grades', gradesRouter)
app.use('/students/?', studentsRouter)

app.listen(app.get('port'),()=> console.log(`listening on port ${app.get('port')}`))