import React from 'react';

export const UserList = ({ users }) => {
    //console.log(props)
    return (
        <div>
            <h1>Users Listing Table</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Address</th>
                        <th scope="col">Apt, Suite...</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">ZipCode</th>
                        <th scope="col">CheckMeOut</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (<tr key={index}>
                    <td>{index+1}</td>
                    <td>{user.fullname}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.address}</td>
                    <td>{user.suite}</td>
                    <td>{user.city}</td>
                    <td>{user.state}</td>
                    <td>{user.zip}</td>
                    {/*
                    <td><button className="btn btn-danger btn-lg" onClick={() => this.deleteHandler(movie)}>Delete</button></td> 
                    */}
                    </tr>))}
                </tbody>
            </table>
        </div>
        
    );
    
}