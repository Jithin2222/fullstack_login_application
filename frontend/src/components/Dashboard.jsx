import React from 'react'
import { useEffect, useState } from 'react';
import { getAllUsers, deleteUser, updateUser } from '../services/userServices';
import './dashboard.css';
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {

    const[users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            navigate("/login"); // 🔒 protect route
        } else {
            loadUsers();
        }
    }, []);

    const loadUsers = async() => {
        const res = await getAllUsers();
        setUsers(res.data);
    }

    const handleUpdate = async (id, currentUsername) => {
        const newName = prompt("Enter new username", currentUsername);
        if (!newName) return;

        try {
            await updateUser(id, { username: newName });
            await loadUsers();
            alert("User updated successfully");
        } catch (error) {
            console.error("Update failed:", error.response?.data || error);
            alert("Update failed");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure?")) {
            await deleteUser(id);
            await loadUsers();
        }
    };

    return (
        <>
            <div className='dashboard'>
                <h2>User Dashboard</h2>
                {users.map((u)=>(
                    <div className='user-card' key={u.id}>
                        <div>
                            <strong>{u.username}</strong>
                            <p>{u.email}</p>
                        </div>
                        <div className='user-actions'>
                            <button className="btn-delete" onClick={() => handleDelete(u.id)}>Delete</button>
                            <button className="btn-update" onClick={() => handleUpdate(u.id, u.username)}>Update</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Dashboard