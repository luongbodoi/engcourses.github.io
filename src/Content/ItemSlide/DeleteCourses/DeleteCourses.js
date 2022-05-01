import './DeleteCourses.css'
import { useEffect } from 'react'


function DeleteCourses({ id }) {

    function DeleteCourseInAPI() {
        fetch('http://localhost:8000/courses/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(res => console.log(res))
    }

    function DeleteCourse () { 
        const confirmBox = window.confirm(
            "Xóa khóa học ?"
        )

        if (confirmBox === true) {
            DeleteCourseInAPI()
            window.location.reload();
        }
    }

    useEffect(() => {
        fetch("http://localhost:8000/courses")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            });
    }, []);

    return (
        <button className="Delete__course" onClick = { DeleteCourse } >
            <i class="fa-solid fa-xmark"></i>
        </button>
    )
}

export default DeleteCourses