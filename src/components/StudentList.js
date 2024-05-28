import { collection, onSnapshot, query, where, deleteDoc, doc, orderBy } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../firebase-config'
import DeleteIcon from '@mui/icons-material/Delete';

function StudentList() {
    const [classs, setclasss] = useState("")
    const [department, setdepartment] = useState("")
    const [students, setstudents] = useState([])
    const getStudents = () => {
        console.log(classs, department)
        if (classs === "Class*" || department === "Department*") {
            window.alert("Please select the fields!"); return;
        }
        const coll = collection(db, 'student');
        const q = query(coll, where("class", "==", classs), where("department", "==", department),orderBy("rollno"));
        onSnapshot(q, snapshot => {
            setstudents([]);
            snapshot.forEach(student => {
                console.log(student);
                setstudents(students => [...students, { ...student.data(), id: student.id }]);
            })
        })
    }
    const deleteStudent = async (id) => {
        const docRef = doc(db, 'student', id);
        await deleteDoc(docRef);
    }
    return (
        <div className="contact">
            <div className="container border mt-5 rounded p-5">
                <div className="row ">
                    <div className="col-md-12">
                        <div className="titlepage text_align_center">
                            <h2>Students List</h2>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <select className="custom-select" value={classs} onChange={(e) => setclasss(e.target.value)} required>
                            <option selected>Class*</option>
                            <option value="fy">FY</option>
                            <option value="sy">SY</option>
                            <option value="ty">TY</option>
                        </select>
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
                                    <th scope="col">Roll No</th>
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
                                    students && students.map(student => {
                                        return <tr>
                                            <td>{student.rollno}</td>
                                            <td>{student.fname + " " + student.lname}</td>
                                            <td>{student['phone']}</td>
                                            <td>{student['email']}</td>
                                            <td>{student['content']}</td>
                                            <td>{student['studentid']}</td>
                                            <td>{student['password']}</td>
                                            <td><DeleteIcon className='btnHover' onClick={() => deleteStudent(student['id'])} /></td>
                                        </tr>
                                    })
                                }
                                {
                                    students.length === 0 && <h1 className='mt-4 h2'>No Students</h1>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentList

