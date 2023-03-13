import './login.scss'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom'
import { useState, useRef, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';



function Login() {
    const { dispatch } = useContext(AuthContext);

    const [err, setErr] = useState(false)
    const [loginErr, setLoginErr] = useState(null)
    const [data, setData] = useState(null)
    const inputRef = useRef()

    const setLogin = (e) => {
        const value = e.target.value
        setData({ ...data, [e.target.name]: value })
    }

    const checkUser = async (e) => {
        e.preventDefault();

        if (!inputRef[0].value || !inputRef[1].value) {
            setErr(true)
        } else {
            try {
                const check = await axios.post(process.env.REACT_APP_BASEURL + 'auth/login', data)
                localStorage.setItem('bookUser', JSON.stringify(check.data.accessToken))
                dispatch({type:'login'})

            } catch (err) {
                setErr(false)
                setLoginErr(err.response.data)
            }
        }

    }

    return (
        <div className="login">
            <div className="loginHead">
                <MenuBookIcon className='loginBookIcon' />
                <h4>Hello Again!</h4>
                <p>Welcome to ESELL</p>
            </div>
            <form>
                {err && <p>Invalid credentials</p>}
                {loginErr && <p>{loginErr}</p>}
                <div className="formInput">
                    <input type="text" placeholder='Email' name='email' ref={(el) => (inputRef[0] = el)} onChange={setLogin} required />
                </div>
                <div className="formInput">
                    <input type="password" placeholder='Password' name='password' ref={(el) => (inputRef[1] = el)} onChange={setLogin} required />
                </div>
                <button onClick={checkUser}>Login</button>
            </form>
            <span className='noAcc'>Don't have a account? <Link to='/register' style={{ color: 'blue', textDecoration: 'none' }}>Register</Link></span>
        </div>
    )
}

export default Login
