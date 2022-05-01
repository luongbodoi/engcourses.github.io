import { useState, useEffect } from "react";
import '../ItemSlide.css'
import CheckStudied from '../CheckStudied/CheckStudied.js'

function FlashCards({ decrip, img, checkStudied }) {
    const [flip, setFlip] = useState(false);

    function handleClick(e) {
        if (e.target.className.baseVal === '' || e.target.className === 'fa-solid fa-check') {
            setFlip(flip)
        }
        else {
            setFlip(!flip)
        }
    }


    return (
        <div className="flip-card">
            <div
                className={flip ? "flip-card-inner--active flip-card-inner" : "flip-card-inner"}
                onClick={handleClick}
            >
                <CheckStudied Check = { checkStudied } />
                <div className="flip-card-front">
                    <img src={img} className='flip-card__img' />
                </div>
                <div className="flip-card-back">
                    <div className="flip-card__descri">
                        {decrip}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashCards