import './ItemSlide.css'
import 'react-slideshow-image/dist/styles.css'

import { Slide } from 'react-slideshow-image';
import FlashCardItem from './FlashCard/FlashCardItem.js';


function ItemSlide({ FlashCards, name }) {

    return (
        <div className="Content">
            <div className='Content-heading'>
                {name}
            </div>
            <div>
                <div className='slide-container'>
                    <div className='Flash-slide'>
                        <Slide>
                            {
                                FlashCards.map((FlashCard, index) => {
                                    return (
                                        <FlashCardItem key={index} decrip={FlashCard.description} img={FlashCard.img} checkStudied={FlashCard.checkStudied}  />
                                    )
                                })
                            }
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ItemSlide
