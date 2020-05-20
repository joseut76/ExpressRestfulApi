const express =  require('express')
const router = express.Router()

const fs  = require('fs')

const students =JSON.parse(fs.readFileSync('students.json'))

router.get('/:studentId', (req, res)=> {
    
    const selectedStudent=students.find(student => student.studentId ===Number(req.params.studentId))   
    res.send("Name: " + selectedStudent.firstname + " "+selectedStudent.lastname+ ", Grade: "+ selectedStudent.grade)
    
})

module.exports = router