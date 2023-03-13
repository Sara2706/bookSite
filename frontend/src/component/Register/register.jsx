import './register.scss'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {Link, useNavigate} from 'react-router-dom'
import { useState, useRef } from 'react';
import axios from 'axios';

function Register() {
    const [err, setErr] = useState(false);
    const [registerERR, setRegisterErr] = useState(null);
    const [data, setData] = useState(null)
    const inputRef = useRef()
    const navigate = useNavigate();


    const setRegister = (e) => {
        const value = e.target.value
        setData({...data,[e.target.name]:value})
    }

    const createUser = async (e) => {
        e.preventDefault();

        if (!inputRef[0].value || !inputRef[1].value || !inputRef[2].value || !inputRef[3].value ) {
            setErr(true)
        }else{
            try {
                await axios.post(process.env.REACT_APP_BASEURL + 'auth/register', data)
                navigate('/login')
            } catch (err) {
                setErr(true)
                setRegisterErr(err.response.data)
            }
        }
        
    }

    return (
        <div className="register">
            
            <div className="registerHead">
                <MenuBookIcon className='registerBookIcon'/>
                <h4>Hello!</h4>
                <p>Welcome to ESELL</p>
            </div>
            <form>
                {err && <p>Invalid credentials</p>}
                {registerERR && <p>{registerERR}</p>}
                <div className="formInput">
                    <input type="text" placeholder='Username' name='name' onChange={setRegister} ref={(el) => (inputRef[0] = el)}/>
                </div>
                <div className="formInput">
                    <input type="text" placeholder='Email' name='email' onChange={setRegister} ref={(el) => (inputRef[1] = el)}/>
                </div>
                <div className="formInput">
                    <input type="number" placeholder='Phone No' name='phone' onChange={setRegister} ref={(el) => (inputRef[2] = el)}/>
                </div>
                <div className="formInput">
                    <input type="password" placeholder='Password' name='password' onChange={setRegister} ref={(el) => (inputRef[3] = el)}/>
                </div>
                <button onClick={createUser}>Register</button>
            </form>
            <span className='alAcc'>Already have a account? <Link to='/login' style={{color:'blue',textDecoration:'none'}}>Login</Link></span>
        </div>
    )
}

export default Register
