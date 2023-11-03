import React, { useState, useEffect } from 'react';
import "./Table.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import axios from "axios";


//const defaultTheme = createTheme();


export default function Table() {

    const [users, setUsers] = useState([{
        Name: "malshi", Email: "malshi@gmail.com", Age: 24
    }])

    useEffect(() => {
        axios.get('http://localhost:3000/seller')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='table-wrapper'>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='art name'> ART NAME </th>
                        <th className='artist name'> ARTIST NAME </th>
                        <th className='price'> PRICE </th>
                        
                        <th> Actions </th>
                    </tr>
                </thead>

                <tbody>
                {
                            users.map((user) => {
                                return    <tr>
                                    <td>{user.name}</td>
                                    <td>{user.caMarks}</td>
                                    <td>{user.endMarks}</td>
                                    <td>{user.gpa}</td>
                                    <td className="fit">
                                        <span className='actions'>
                                            <BsFillTrashFill className="delete-btn"/>
                                            <BsFillPencilFill className="edit-btn"/>
                                        </span>
                                    </td>
                                </tr>
                            })
                        }
                </tbody> 
 


            </table>

            <button className="add-button"><Link to="/model">Add Results</Link></button>
        </div>
    );
}

