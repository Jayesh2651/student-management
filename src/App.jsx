
import { useState, useEffect } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import StudentCard from './components/StudentCard'

const initialStudents = [
  {
    id: 1,
    name: "Rahul",
    email: "rahul@gmail.com",
    course: "MCA",
    semester: 3,
    status: true
  },
  {
    id: 2,
    name: "Priya",
    email: "priya@gmail.com",
    course: "BCA",
    semester: 2,
    status: true
  },
  {
    id: 3,
    name: "Amit",
    email: "amit@gmail.com",
    course: "MCA",
    semester: 4,
    status: false
  }
]

function App() {

  // Load saved students from localStorage
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students")

    return savedStudents
      ? JSON.parse(savedStudents)
      : initialStudents
  })

  // Form input states
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [course, setCourse] = useState("")
  const [semester, setSemester] = useState("")

  // Save students whenever the list changes
  useEffect(() => {
    localStorage.setItem(
      "students",
      JSON.stringify(students)
    )
  }, [students])

  // Add student
  function handleAddStudent(event) {
    event.preventDefault()

    const newStudent = {
      id: Date.now(),
      name: name,
      email: email,
      course: course,
      semester: Number(semester),
      status: true
    }

    setStudents(previousStudents => [
      ...previousStudents,
      newStudent
    ])

    setName("")
    setEmail("")
    setCourse("")
    setSemester("")
  }

  // Delete student
  function handleDeleteStudent(id) {
    setStudents(previousStudents =>
      previousStudents.filter(
        student => student.id !== id
      )
    )
  }

  return (
    <div className="app">

      <Navbar />

      <div className="main-layout">

        <Sidebar />

        <main className="content">

          <h1>Student Dashboard</h1>

          <p>Manage your student records.</p>

          <h2>Total Students: {students.length}</h2>

          {/* Add Student Form */}

          <div className="form-container">

            <h2>Add New Student</h2>

            <form onSubmit={handleAddStudent}>

              <input
                type="text"
                placeholder="Student Name"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                required
              />

              <input
                type="email"
                placeholder="Student Email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
              />

              <input
                type="text"
                placeholder="Course"
                value={course}
                onChange={(event) =>
                  setCourse(event.target.value)
                }
                required
              />

              <input
                type="number"
                placeholder="Semester"
                min="1"
                value={semester}
                onChange={(event) =>
                  setSemester(event.target.value)
                }
                required
              />

              <button type="submit">
                Add Student
              </button>

            </form>

          </div>

          {/* Student List */}

          <h2>Registered Students</h2>

          <div className="student-list">

            {students.map(student => (
              <StudentCard
                key={student.id}
                id={student.id}
                name={student.name}
                email={student.email}
                course={student.course}
                semester={student.semester}
                status={student.status}
                onDelete={handleDeleteStudent}
              />
            ))}

          </div>

          {students.length === 0 && (
            <p>No students found. Add your first student!</p>
          )}

        </main>

      </div>

      <Footer />

    </div>
  )
}

export default App
