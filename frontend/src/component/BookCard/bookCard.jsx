import './bookCard.scss'
import {Link} from 'react-router-dom'


function BookCard({data}) {
    return (
        <Link to={'/book/'+data._id} className="bookCard link" state={data}>
            <div className="top">
                <img src={data.img} alt="Banner img" />
            </div>
            <div className="bottom">
                <h3>{data.productName}</h3>
                <h4>{data.catogry}</h4>
                <h6>{data.price}</h6>
            </div>
        </Link>
    )
}

export default BookCard