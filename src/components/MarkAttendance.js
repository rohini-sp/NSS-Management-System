import { collection, doc, getDoc, onSnapshot, query, updateDoc, where } from 'firebase/firestore'
import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../firebase-config'

function MarkAttendance() {
    const [classs, setclasss] = useState("")
    const [event, setevent] = useState({})
    const [department, setdepartment] = useState("")
    const [students, setstudents] = useState([])
    const { eventid } = useParams();
    const navigate=useNavigate();
    const getEventDetails=async()=>{
        const docRef=doc(db,'blogs',eventid);
        return await getDoc(docRef);
    }
    useEffect(() => {
        console.log("getting")
        return()=> getEventDetails().then(res=>{
            setevent(res.data())
        });
    // eslint-disable-next-line
    },[])
    
    const [attendance, setattendance] = useState({
        "fy-CS":[],
        "fy-BAF":[],
        "fy-IT":[],
        "fy-BCOM":[],
        "fy-PlainBsc":[],
        "sy-CS":[],
        "sy-BAF":[],
        "sy-IT":[],
        "sy-BCOM":[],
        "sy-PlainBsc":[],
        "ty-CS":[],
        "ty-BAF":[],
        "ty-IT":[],
        "ty-BCOM":[],
        "ty-PlainBsc":[],
    })
    const getStudents=()=>{
        if(classs==="Class*" || department==="Department*"){
            window.alert("Please select the fields!");return;
        }
        const coll=collection(db,'student');
        const q=query(coll,where("class","==",classs),where("department","==",department));
        onSnapshot(q,snapshot=>{
            setstudents([]);
            snapshot.forEach(student=>{
                setstudents(students=>[...students,{...student.data(),id:student.id}]);
            })
        })
    }
    const mark=(e)=>{
        const key=classs+"-"+department;
        const rollno=e.target.value;
        const checked=e.target.checked;
        if(checked && (!attendance[key].includes(rollno))){
            attendance[key].push(rollno);
            setattendance(attendance);
        }else if((!checked) && attendance[key].includes(rollno)){
            attendance[key]=attendance[key].filter(value=>value!==rollno);
            setattendance(attendance);
        }
    }
    const updateAttendance=()=>{
        if(!window.confirm("Are you sure you want to update attendance?"))return;
        const docRef=doc(db,'blogs',eventid);
        updateDoc(docRef,{
            attendance,
            marked:true
        }).then(()=>{
            window.alert("Updated Attendance successfully!")
            navigate('/eventlist')
        })
    }
    return (
        <div className="contact">
            <div className="container border rounded p-5 mt-5">
                <div className="row ">
                    <div className="col-md-12">
                        <div className="titlepage text_align_center">
                            <h2>{event.title}</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
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
                            <option value="PlainBsc">Plain Bsc</option>
                        </select>
                        <button className="send_btn btn text-white bg-theme-color" onClick={getStudents}>Search</button>
                    </div>
                    <div className="col-md-8 border_left">
                        <table className="table mh-50">
                            <thead className=" bg-theme-color text-white">
                                <tr>
                                    <th scope="col">Present</th>
                                    <th scope="col">Roll No</th>
                                    <th scope="col">Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    event && students && students.map(student=>{
                                        const key=classs+'-'+department;
                                        const val=student.rollno;
                                        return <tr key={student.phone}>
                                        <th scope="row">
                                            <input type="checkbox" value={val} onChange={mark}/>
                                        </th>
                                        <td>{student.rollno }</td>
                                        <td><span>{student.fname+" "+student.lname}</span>{event.attendance[key].includes(val) && <div className='present d-inline-block'></div>}</td>
                                    </tr>
                                    })
                                }
                                {
                                    students.length===0 && <h1 className='mt-4 h2'>No Students</h1>
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='col-md-12 mt-4  d-flex justify-content-center'>
                    <button className="send_btn btn text-white bg-theme-color" onClick={updateAttendance}>Update attendance</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarkAttendance
