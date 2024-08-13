import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme';

function ColorForm(props) {
    const [color, setColor] = useState("")
    const dispatch =  useDispatch()
    return (
        <div>
            <input className='h-10 px-3 border border-cyan-900 rounded-md mx-10' onChange={(e)=>{
                setColor(e.target.value)
            }} type="text" placeholder='ex: blue' value={color}/>
            <button className='bg-cyan-900 text-white px-3 rounded-md h-10'  onClick={()=>dispatch(changeColor(color))}>Change color</button>
        </div>
    );
}

export default ColorForm;