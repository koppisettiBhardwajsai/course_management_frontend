import {useEffect, useState} from "react";
import api from "../api";

export default function Courses(){
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        api.get("/courses").then((res)=> setCourses(res.data));
    },[]);

    return(
        <div>
            <h2>Courses</h2>
            {courses.map((c)=>{
                <div key={c.id}>
                    <h3>{c.courseName}</h3>
                    <p>{c.desciption}</p>
                    <p>{c.instructor}</p>
                </div>
            })}
        </div>
    );
}