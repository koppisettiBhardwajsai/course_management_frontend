import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={styles.nav}>
      <h3>Course Manager</h3>

      <div>
        {!token && <Link to="/" style={styles.link}>Register</Link>}
        {!token && <Link to="/login" style={styles.link}>Login</Link>}
        {token && <Link to="/courses" style={styles.link}>Courses</Link>}
        {token && <button onClick={logout} style={styles.btn}>Logout</button>}
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 20px",
    background: "#1976d2",
    color: "white"
  },
  link: {
    marginRight: "15px",
    color: "white",
    textDecoration: "none"
  },
  btn: {
    background: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer"
  }
};
