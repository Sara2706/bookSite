import './homePage.scss'
import Navbar from '../../component/Snav/navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import FeaturedBook from '../../component/featueedBook/featuredBook'
import BookList from '../../component/BooksList/bookList'
import Catogry from '../../component/Catogry/carogry'
import Footer from '../../component/Footer/footer'

function HomePage() {
    const [searchValue, setSearchValue] = useState(null)
    const [catogryValue, setCatogryValue] = useState(null)
    const [books, setBooks] = useState([])
    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await axios.get(process.env.REACT_APP_BASEURL + `product/?${searchValue ? `search=${searchValue}` : ''}${catogryValue ? `&filter=${catogryValue}` : ''}`, { headers: { token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDQ0ZTBkZWZkNjNiMTUxOGEzMTNkMiIsImlhdCI6MTY3NDg1ODI2NX0.b2SwcMEY1Q8Do32FfT5pIhrFCTknjhfIl6hNKyT-Wx8' } })
                setBooks(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        getBooks();
    }, [searchValue, catogryValue])
    return (
        <div className="homePage">
            <Navbar setSearchValue={setSearchValue} />
            <FeaturedBook />
            <h1 className='bookHeading'>Books</h1>
            <Catogry setCatogryValue={setCatogryValue} />
            <BookList books={books} />
            <Footer />
        </div>
    )
}

export default HomePage