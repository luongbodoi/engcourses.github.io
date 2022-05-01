import '../ItemSlide.css'

import { useState } from 'react'

function CheckStudied({ Check ,  }) {

    const [mark , setMark] = useState(Check)

    function MarkStudy() {

        setMark(!mark)

        const putStudiedTrue = {
            id : 1,
            checkStudied : true,
        }

        const putStudiedFalse = {
            id : 1,
            checkStudied : false,
        }

        const putStudied = {
            method: 'PATCH',
            body: JSON.stringify( mark ? putStudiedFalse : putStudiedTrue)
        };

        fetch('http://localhost:8000/courses', putStudied)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className={mark ? "More-option More-option--active" : "More-option"}
                onClick={MarkStudy}>
                <div className="more-option__icon">
                    <i className="fa-solid fa-check"></i>
                </div>
            </div>
            <div className={!mark ? "more-option__text more-option__text--to-fished" : "More-option__text"}>
                Đánh dấu để kết thúc bài học
            </div>
            <div className={mark ? "more-option__text more-option__text--done" : "More-option__text"}>
                Đã học xong !
            </div>
        </div>
    )

}

export default CheckStudied
