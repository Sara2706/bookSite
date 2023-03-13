import BookCard from '../BookCard/bookCard'
import './bookList.scss'

function BookList({books}) {
  return (
    <div className='bookList'>
      {books.map((item)=>(
        <BookCard key={item._id} data={item}/>
      ))}

    </div>
  )
}

export default BookList