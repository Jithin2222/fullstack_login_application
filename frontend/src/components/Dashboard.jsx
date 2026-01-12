import React from 'react'
import { useEffect, useState } from 'react';
import { getAllUsers, deleteUser } from '../services/userServices';
import './dashboard.css';


const Dashboard = () => {

    const[users, setUsers] = useState([]);

    const loadUsers = async() => {
        const res = await getAllUsers();
        setUsers(res.data);
    }

    useEffect(()=>{
        loadUsers();
    }, [])

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
                        <button onClick={()=> deleteUser(u.id).then(loadUsers)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Dashboard