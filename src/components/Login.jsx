import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/user';
function Login(props) {
    const dispatch = useDispatch()
    return (
        <div>
            <button 
            onClick={()=>dispatch(login({name:"Souvede",age:20,email:"sss@gmail.com"}))}
            className='border-cyan-900'>
                Login
            </button>
        </div>
    );
}

export default Login;