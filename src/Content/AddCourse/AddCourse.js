import "./AddCourses.css";
import React, { useState, useRef } from "react";

function AddCourse() {
    const checkNameCourse = useRef(null);
    const btnNameCourse = useRef(null);

    const [file, setFile] = useState([]);
    const [flashcard, setFlashcard] = useState([]);
    const [nameCourse, setNameCourse] = useState();
    const [decrip, setDecrip] = useState()
    const [quanlity, setQuanlity] = useState(1);
    const [courses, setCourses] = useState({});

    const listAdd = [];

    function handleChange(e) {
        const updateArrayFile = [...file, URL.createObjectURL(e.target.files[0])];
        setQuanlity(quanlity + 1);
        setFile(updateArrayFile);
    }

    function handleChangeDecrip(e) {
        setDecrip(e.target.value)
    }

    function increaseAddImg() {
        setQuanlity(quanlity + 1);
    }

    for (let i = 0; i < quanlity; i++) {
        listAdd.push(
            <div className="add-courses__add-img" key={i}>
                <form action="/action_page.php" className="item-upload-img">
                    <input
                        type="file"
                        id="myFile"
                        name="filename"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Mô tả khóa học"
                        className="decrip-courses"
                        onChange={handleChangeDecrip}
                    />
                    <img src={file[i]} className="preview__upload-img" />
                </form>
                <button onClick={addToFlashcard}> Xác nhận </button>
            </div>
        );
    }

    function addToFlashcard() {

        setFlashcard((prev) => (
            [
                ...prev,
                {
                    checkStudied: false,
                    img: file,
                    description: decrip,
                }
            ]
        ))

    }


    function getNameCourses(e) {
        setNameCourse(e.target.value);

        if (e.target.value.length >= 4 && e.target.value.length <= 8) {
            checkNameCourse.current.classList.add("add-name__input-check--active");
            btnNameCourse.current.disabled = false;
        } else {
            checkNameCourse.current.classList.remove("add-name__input-check--active");
            btnNameCourse.current.disabled = true;
        }
    }

    function nameCourseToAPI() {
        btnNameCourse.current.disabled = true;
        if (nameCourse === undefined) {
            alert("Bạn chưa nhập tên");
        } else {
            setCourses({
                name: nameCourse,
            });
        }
    }


    function PostCoursesAPI() {
        setCourses(() => (
            {
                name: nameCourse,
                FlashCards: flashcard
            }
        ))

        console.log(courses)

        // fetch('http://localhost:8000/courses', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(courses),
        // })
        //     .then((response) => response.json())
        //     //Then with the data from the response in JSON...
        //     .then((data) => {
        //         console.log('Success:', data);
        //     })
        //     //Then with the error genereted...
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }


    return (
        <div className="add-courses">
            <div className="Name-option">Thêm Khóa học</div>

            <div className="add-courses__add-name">
                <div className="add-name__heading">Thêm Tên Khóa Học</div>
                <input className="add-name__input" onChange={getNameCourses} />

                <button ref={btnNameCourse} onClick={nameCourseToAPI}>
                    Xác nhận
                </button>

                <div className="add-name__input-check" ref={checkNameCourse}>
                    <div className="add-name__input--warning">
                        Vui lòng nhật từ 4 đế 8 ký tự
                    </div>
                    <div className="add-name__input--success">Tên khóa học hợp lệ</div>
                </div>
            </div>

            <div className="add-more-img__heading">Tải hình ảnh khóa học</div>

            {listAdd}

            <button className="add-more-img" onClick={increaseAddImg}>
                Nhấn để tải thêm ảnh
            </button>

            <div className="add-courses__submit">
                <button onClick={PostCoursesAPI}>Hoàn tất đăng bài học</button>
            </div>
        </div>
    );
}

export default AddCourse;
