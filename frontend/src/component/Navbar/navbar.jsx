import { Search, ShoppingCart } from '@material-ui/icons';
import { ShoppingBag } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import './navbar.scss';

function Navbar() {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem('bookUser')
        dispatch({type:'logout'})
        navigate('/login')
    }
    return (
        <div className='navBar'>
            <div className="left">
                <Link className="logo link" to='/'>
                    Amazos
                </Link>

            </div>
            <div className="right">
                <Link to='/cart' className="iconRight link">
                    <ShoppingCart className='rightIcon' />
                    <span>My cart</span>
                </Link>
                <Link to='/order' className="iconRight link">
                    <ShoppingBag className='rightIcon' />
                    <span>My order</span>
                </Link>
                <div className="iconRight link" style={{cursor:'pointer'}} onClick={logOut}>

                    <LogoutIcon className='rightIcon' />
                    <span>Logout</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar