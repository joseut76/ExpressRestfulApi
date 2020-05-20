const express =  require('express')
const router = express.Router()

const fs  = require('fs')

const students =JSON.parse(fs.readFileSync('students.json'))


//id provided
router.get('/:studentId', (req, res)=> {
    
    const selectedStudent=students.find(student => student.studentId ===Number(req.params.studentId))   
    res.send(selectedStudent) 
})

//GET Parameters provided
router.get('/', (req, res)=> {
    var selectedStudentName
  
    //students?firstname="firstname"
    if(req.query.firstname){        
        selectedStudentName=students.filter(student => student.firstname.toLowerCase() === req.query.firstname.toLowerCase())
        res.send(selectedStudentName)
    }    
    //students?lastname="lastname"
    else if(req.query.lastname){        
        selectedStudentName=students.filter(student => student.lastname.toLowerCase() === req.query.lastname.toLowerCase())
        res.send(selectedStudentName)
    }
    //students (no param)
    else  res.send(students)
})





//allow to display a message in the body and post a change to the data parformed in the body
// students/newGrade
router.post('/newGrade', (req, res)=> {
    console.log(req.body)
    console.log()
    res.send(`Hello, enter a new grade ${req.body.grade}`)
})

// students/newStudent
//allow to display a message in the body and post a change to the data parformed in the body
router.post('/newStudent', (req, res)=> {
    console.log(req.body)
    res.send(`Hello, create a new student ID ${req.body.ID} firstname ${req.body.firstname} lastname ${req.body.lastname}`)    
})
module.exports = router