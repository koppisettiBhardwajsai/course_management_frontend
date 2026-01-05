import { useEffect, useState } from "react";
import api from "../api";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api.get("/courses");
        setCourses(res.data);
      } catch (err) {
        console.error("Failed to fetch courses", err);
      }
    };

    fetchCourses();
  }, []);

  const addCourse = async (e) => {
    e.preventDefault();

    try {
      await api.post("/courses", {
        courseName,
        description,
        instructor
      });

      setCourseName("");
      setDescription("");
      setInstructor("");

      // refresh list
      const res = await api.get("/courses");
      setCourses(res.data);
    } catch (err) {
      alert("Failed to add course", err);
    }
  };

  return (
    <div className="courses-container">
      <h2>Add Course</h2>

      <form onSubmit={addCourse}>
        <input
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          placeholder="Instructor"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          required
        />
        <button>Add Course</button>
      </form>

      <h2>Available Courses</h2>

      {courses.length === 0 && <p>No courses available</p>}

      {courses.map((c) => (
        <div className="course-card" key={c.id}>
          <h3>{c.courseName}</h3>
          <p>{c.description}</p>
          <p><b>Instructor:</b> {c.instructor}</p>
        </div>
      ))}
    </div>
  );
}
