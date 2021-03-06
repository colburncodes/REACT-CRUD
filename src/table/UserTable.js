import React from 'react';

const UserTable = (props) => (
    <table>
        <thead>
            <th>Name</th>
            <th>UserName</th>
            <th>Status</th>
            <th>Actions</th>
        </thead>
        <tbody>
        {props.users.length > 0 ? (
            props.users.map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{String(user.isActive)}</td>
                    <td>
                        <button onClick={() => props.editRow(user)} className="button muted-button">Edit</button>
                        <button onClick={() => props.deleteUser(user.id)} className="button muted-button">Delete</button>
                    </td>
                </tr>
            ))
        ):(
            <tr>
                <td colSpan={3}>No users</td>
            </tr>

        )}
        </tbody>
    </table>
)

export default UserTable;