import api from "../api";
import {Link} from "react-router-dom";

export default function Login(){
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const res = await api.post("/auth/login", {
            email: e.target.email.value,
            password: e.target.password.value
        });
        localStorage.setItem("token", res.data.token);
        window.location.href = "/courses";
    };

    return(
        <div className="container">
            <div className="card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="password" name="password" placeholder="Password" />
                    <button>Login</button>
                </form>
                <div className="link">
                    <Link to="/">New user? Register</Link>
                </div>
            </div>
        </div>
    );
}