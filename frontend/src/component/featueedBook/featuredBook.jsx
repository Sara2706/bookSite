import './featuredBook.scss'

function FeaturedBook() {
    return (
        <div className='featuredBook'>
            <div className="left">
                <h3>Deagon Balls</h3>
                <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae voluptas, iure velit quia ab beatae atque quisquam corporis placeat assumenda magni ipsam iste doloribus neque aut consequuntur deleniti amet.
                </h6>
                <button>More details</button>
            </div>
            <div className="right">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2w_y0wV_MsPIW0WbzC6k9nmYKj_wIJNONLQ&usqp=CAU" alt="Banner img" />
            </div>
        </div>
    )
}

export default FeaturedBook