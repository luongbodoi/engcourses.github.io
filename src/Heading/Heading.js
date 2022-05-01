import './Heading.css'


function Heading () {
    return (
        <div className="heading">
            <div className='heading__user-icon'>
                <i className="fa-solid fa-user"></i>
            </div>
            <div className="heading__name">
                Phạm Hùng Lương
            </div>
            <div className="heading__button">
                Log out 
            </div>
        </div>
    ) 
}

export default Heading 