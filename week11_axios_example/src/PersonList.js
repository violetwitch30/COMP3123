import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function PersonList() {
    const [users, setUsers] = useState([])

    const fetchUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
            .catch(err => {
                console.log("There was an error fetching users ", err)
            })
    }
    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            <h3>Person List</h3>
            <table border="1" cellPadding="5">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>

                <tbody>
                {users.map(u => (
                    <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}