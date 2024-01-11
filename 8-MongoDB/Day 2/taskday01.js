
use FacultySystemDB 

db.student.insertOne({
  fName: "Ahmed",
  lName: "Samy",
  Age: 26,
  Faculty: { Name: "CB", Address: "Cairo" },
  Grades: [
    { cname: "c#", Grade: 60, Pass: true },
    { cname: "JS", Grade: 100, Pass: true }
  ],
  isFired: false
});

db.student.insertMany([
  {
    fName: "Kareem",
    lName: "Hassan",
    Age: 27,
    Faculty: { Name: "Medicine", Address: "Giza" },
    Grades: [
      { cname: "Node", Grade: 95, Pass: true },
      { cname: "React", Grade: 85, Pass: true }
    ],
    isFired: true
  },
  {
    fName: "Ayman",
    lName: "Ahmed",
    Age: 26,
    Faculty: { Name: "Mech", Address: "Cairo" },
    Grades: [
      { cname: "HTML", Grade: 90, Pass: true },
      { cname: "CSS", Grade: 78, Pass: true }
    ],
    isFired: false
  },
  {
    fName: "Amr",
    lName: "Ibrahim",
    Age: 26,
    Faculty: { Name: "dentist", Address: "Cairo" },
    Grades: [
      { cname: "Database", Grade: 68, Pass: true },
      { cname: "Freelance", Grade: 79, Pass: true }
    ],
    isFired: false
  }
])

db.student.find({})
db.student.find({ fName: "Ayman" })
db.student.find({ $or: [{ fName: "Ahmed" }, { lName: "Ahmed" }] })
db.student.find({ fName: { $ne: "Ahmed" } })
db.student.find({ Age: { $lt: 21 } })
db.student.find({ isFired: true })
db.student.find({ Age: { $gte: 21 }, Faculty: { $exists: true } })
db.student.find({ fName: "Amr" }, { fName: 1, lName: 1, isFired: 1, _id: 0 })

// Updating 
db.student.updateOne({ fName: "Kareem" }, { $set: { isFired: true } })

db.student.updateMany({ FirstName: "Amr" }, { $set: { LastName: "Hamam" } })


db.student.replaceOne(
  { fName: "Amr" },
  {
    fName: "Mohammed",
    lName: "Khaled",
    Age: 20,
    Faculty: { Name: "Engineering", Address: "Cairo" },
    Grades: [
      { CourseName: "Math", Grade: 85, Pass: true },
      { CourseName: "Physics", Grade: 75, Pass: true }
    ],
    isFired: false
  }
)

db.student.deleteMany({ IsFired: true })

db.student.drop()
db.dropDatabase()




use FacultySystemV2
db.createCollection("student")
db.createCollection("faculty")
db.createCollection("course")

db.student.insertMany([
  {
    FirstName: "Mostafa",
    LastName: "Hussein",
    IsFired: true,
    FacultyID: 1,
    Courses: [
      { CourseID: 10, Grade: "B+" },
      { CourseID: 11, Grade: "A-" }
    ]
  }
])

db.faculty.insertMany([
  { FacultyName: "Engineering", Address: "Ain Shams" }
])

db.course.insertMany([
  { CourseName: "Structure", FinalMark: 95 }
])
