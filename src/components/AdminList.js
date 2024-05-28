import { useState } from 'react'
import { collection, deleteDoc, doc, onSnapshot, query, where } from 'firebase/firestore'
import React from 'react'
import { db } from '../firebase-config'
import DeleteIcon from '@mui/icons-material/Delete';

function AdminList() {
    const [department, setdepartment] = useState("")
    const [admins, setadmins] = useState([])

    const deleteTeacher = async (id) => {
        const docRef = doc(db, 'teachers', id);
        await deleteDoc(docRef);
    }
    const getStudents = () => {
        if (department === "Department*") {
            window.alert("Please select the fields!"); return;
        }
        const coll = collection(db, 'teachers');
        const q = query(coll, where("department", "==", department));
        onSnapshot(q, snapshot => {
            setadmins([]);
            snapshot.forEach(admin => {
                setadmins(admins => [...admins, { ...admin.data(), id: admin.id }]);
            })
        })
    }

    return (
        <footer>

            <div className="contact">
                <div className="container border mt-5 rounded p-5">
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="titlepage text_align_center">
                                <h2>Leaders List</h2>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <select className="custom-select " value={department} onChange={(e) => setdepartment(e.target.value)}>
                                <option selected>Department*</option>
                                <option value="CS">CS</option>
                                <option value="BAF">BAF</option>
                                <option value="IT">IT</option>
                                <option value="BCOM">BCOM</option>
                                <option value="Plain Bsc">Plain Bsc</option>
                            </select>
                            <button className="send_btn btn text-white bg-theme-color" onClick={getStudents}>Search</button>
                        </div>
                        <div className="col-md-10 border_left">
                            <table className="table mh-50">
                                <thead className=" bg-theme-color text-white">
                                    <tr>
                                        <th scope="col">YOJ</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">About</th>
                                        <th scope="col">Uname</th>
                                        <th scope="col">Pwd</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        admins && admins.map(admin => {
                                            return <tr key={admin.id}>
                                                <td>{admin.yearofjoin}</td>
                                                <td>{admin.fname + " " + admin.lname}</td>
                                                <td>{admin['phone']}</td>
                                                <td>{admin['email']}</td>
                                                <td>{admin['content']}</td>
                                                <td>{admin['teacherid']}</td>
                                                <td>{admin['password']}</td>
                                                <td><DeleteIcon className='btnHover' onClick={() => deleteTeacher(admin['id'])} /></td>
                                            </tr>
                                        })
                                    }
                                    {
                                        admins.length === 0 && <h1 className='mt-4 h2'>No Admins</h1>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default AdminList
