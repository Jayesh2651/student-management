
function StudentCard({
  id,
  name,
  email,
  course,
  semester,
  status,
  onDelete
}) {
  return (
    <div className="student-card">

      <h3>{name}</h3>

      <p>Email: {email}</p>

      <p>Course: {course}</p>

      <p>Semester: {semester}</p>

      <p>
        Status: {status ? "Active" : "Inactive"}
      </p>

      <button
        className="delete-button"
        onClick={() => onDelete(id)}
      >
        Delete Student
      </button>

    </div>
  )
}

export default StudentCard
