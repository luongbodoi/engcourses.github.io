import "./Content.css";
import "react-slideshow-image/dist/styles.css";
import ItemSlide from "./ItemSlide/ItemSlide";
import AddCourse from "./AddCourse/AddCourse";
import DeleteCourses from "./ItemSlide/DeleteCourses/DeleteCourses";

import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

function Content() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/courses")
            .then((res) => res.json())
            .then((data) => {
                setCourses(data);
            });
    }, []);

    return (
        <Router>
            <div>
                <div className="grid__row list-courses">
                    {courses.map((course, index) => {
                        return (
                            <div className="gird__column-5 item-course" key={index}>
                                <Link to={course.name}>
                                    <div className="name-course">{course.name}</div>
                                </Link>
                                <DeleteCourses id = { index } />
                            </div>
                        );
                    })}

                    <div className="gird__column-5 item-course">
                        <Link to="/addCourse">
                            <div className="item-course__icon">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </Link>
                    </div>
                </div>

                <Routes>
                    {courses.map((course, index) => {
                        return (
                            <Route
                                path={course.name}
                                element={
                                    <ItemSlide
                                        FlashCards={course.FlashCards}
                                        name={course.name}
                                    />
                                }
                                key={index}
                            />
                        );
                    })}

                    <Route path="/addCourse" element={ <AddCourse /> } />

                </Routes>
            </div>
        </Router>
    );
}

export default Content;
