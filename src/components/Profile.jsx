import React from 'react';
import { useSelector } from 'react-redux';
function Profile(props) {
    const user = useSelector((state)=>state.user.value)
    return (
        <div>
            <p>Name {user.name} </p>
            <p>Email {user.email}</p>
            <p>Age {user.age}</p>
        </div>
    );
}

export default Profile;