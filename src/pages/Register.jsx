import api from "../api";
import {Link} from "react-router-dom";

export default function Register(){
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const data ={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        };
        await api.post("/auth/register",data);
        alert("Registered suceessfully");
    };

    return(
       <div className="container">
            <div className="card">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input name="name" placeholder="Name" />
                    <input name="email" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />
                    <button>Register</button>
                </form>
                <div className="link">
                    <Link to="/login">Already have an account</Link>
                </div>
            </div>
       </div>
    );
}