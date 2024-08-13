import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme';

function ColorForm(props) {
    const [color, setColor] = useState("")
    const dispatch =  useDispatch()
    return (
        <div>
            <input onChange={(e)=>{
                setColor(e.target.value)
            }} type="text" placeholder='ex: blue' value={color}/>
            <button onClick={()=>dispatch(changeColor(color))}>Change color</button>
        </div>
    );
}

export default ColorForm;