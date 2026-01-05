import { useEffect, useState } from "react";
import api from "../api";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    courseName: "",
    description: "",
    instructor: ""
  });
  const [editId, setEditId] = useState(null);

  const fetchCourses = async () => {
    const res = await api.get("/courses");
    setCourses(res.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitCourse = async (e) => {
    e.preventDefault();

    if (editId) {
      await api.put(`/courses/${editId}`, form);
      setEditId(null);
    } else {
      await api.post("/courses", form);
    }

    setForm({ courseName: "", description: "", instructor: "" });
    fetchCourses();
  };

  const editCourse = (course) => {
    setForm(course);
    setEditId(course.id);
  };

  const deleteCourse = async (id) => {
    if (window.confirm("Delete this course?")) {
      await api.delete(`/courses/${id}`);
      fetchCourses();
    }
  };

  return (
    <div className="courses-container">
      <h2>{editId ? "Edit Course" : "Add Course"}</h2>

      <form onSubmit={submitCourse}>
        <input
          name="courseName"
          placeholder="Course Name"
          value={form.courseName}
          onChange={handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          name="instructor"
          placeholder="Instructor"
          value={form.instructor}
          onChange={handleChange}
          required
        />
        <button>{editId ? "Update Course" : "Add Course"}</button>
      </form>

      <h2>Available Courses</h2>

      {courses.length === 0 && <p>No courses available</p>}

      {courses.map((c) => (
        <div className="course-card" key={c.id}>
          <h3>{c.courseName}</h3>
          <p>{c.description}</p>
          <p><b>Instructor:</b> {c.instructor}</p>

          <button onClick={() => editCourse(c)}>Edit</button>
          <button onClick={() => deleteCourse(c.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
