import React from 'react';
import { useSelector } from 'react-redux';
function Profile() {
    const user = useSelector((state)=>state.user.value)
    const theme = useSelector((state)=>state.theme.value)
    console.log("theme",theme);
    
    return (
        <div style={{color:theme}}>
            <h1 className="font-bold">User profile</h1>
            <p>Name {user.name} </p>
            <p>Email {user.email}</p>
            <p>Age {user.age}</p>
        </div>
    );
}

export default Profile;