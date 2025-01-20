import React from 'react'; 
import './User.min.css'; 

const UserWelcome = ({ firstName, lastName, onEdit }) => (
    <div className="welcome">
        <h1>
            Welcome back<br />
            <span className="user-name">{firstName} {lastName}!</span>
        </h1>
        <button className="edit-name-button" onClick={onEdit}>
            Edit Name
        </button>
    </div>
);
export default UserWelcome;