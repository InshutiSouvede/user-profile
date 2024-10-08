import React from 'react';
import { useDispatch } from 'react-redux';
import { login,logout } from '../features/user';
function Login() {
    const dispatch = useDispatch()
    return (
        <div className='flex gap-10 justify-center'>
            <button 
            onClick={()=>dispatch(login({name:"Souvede",age:20,email:"sss@gmail.com"}))}
            className='border-2 px-5 rounded-md border-cyan-900'>
                Login
            </button>
            <button 
            onClick={()=>dispatch(logout())}
            className='border-2 px-5 rounded-md border-cyan-900'>
                Logout
            </button>
        </div>
    );
}

export default Login;