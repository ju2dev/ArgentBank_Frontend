import React from 'react'; 
import './User.min.css';

const UserEditForm = ({ 
    editUserName, 
    firstName, 
    lastName, 
    onSubmit, 
    onChange, 
    onCancel 
}) => (
    <div className="edit-form">
        <h1>Edit user info</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
        }}>
            <div className="input-wrapper">
                <label htmlFor="username">User name:</label>
                <input
                    type="text"
                    id="username"
                    value={editUserName}
                    onChange={onChange}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="firstname">First name:</label>
                <input
                    type="text"
                    id="firstname"
                    value={firstName}
                    disabled
                    className="disabled-input"
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="lastname">Last name:</label>
                <input
                    type="text"
                    id="lastname"
                    value={lastName}
                    disabled
                    className="disabled-input"
                />
            </div>
            <div className="form-buttons">
                <button type="submit" className="save-button">
                    Save
                </button>
                <button type="button" className="cancel-button" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    </div>
);

export default UserEditForm;