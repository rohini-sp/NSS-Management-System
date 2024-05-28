import React, { useState } from 'react';
import { db } from '../firebase-config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

function StudentLogin({setloggedin,setuser}) {
    const [leaderid, setleaderid] = useState("");
    const [leaderpassword, setleaderpassword] = useState("");
    const [studentid, setstudentid] = useState("")
    const [studentpassword, setstudentpassword] = useState("")
    // const navigate = useNavigate();
    
    const leaderLogin = (e) => {
        e.preventDefault();
        if (leaderid === "" && leaderpassword === "") return;
        const teachersColl = collection(db, "teachers");
        const q = query(teachersColl, where("teacherid", "==", leaderid), where("password", "==", leaderpassword));
        onSnapshot(q, snapshot => {
            if (snapshot.size === 1){
                setloggedin("Leader");
                setuser(snapshot.docs[0].data());
                sessionStorage.setItem("user",JSON.stringify(snapshot.docs[0].data()));
                sessionStorage.setItem("user-type","Leader");
            }else window.alert("Invalid Credentials");
        }); 
        
    }
    const studentLogin = (e) => {
        e.preventDefault();
        if (studentid === "" && studentpassword === "") return;
        const coll = collection(db, "student");
        const q = query(coll, where("studentid", "==", studentid), where("password", "==", studentpassword));
        onSnapshot(q, snapshot => {
            if (snapshot.size === 1){
                setuser(snapshot.docs[0].data())
                setloggedin("Student");
                sessionStorage.setItem("user",JSON.stringify(snapshot.docs[0].data()));
                sessionStorage.setItem("user-type","Student");
            }
            else window.alert("Invalid Credentials")
        });
    }
    return (
        <div className="contact mt-5">
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-6 bg-primary border-radius-20 p-5 custom-border">
                        <div className="col-md-12">
                            <div className="titlepage text_align_center">
                                <h2 className='text-white'>Student Login</h2>
                            </div>
                        </div>
                        <form id="request" className="main_form">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <input className="contactus" value={studentid} placeholder="Student Id*" type="text" name="userid" required onChange={(e)=>setstudentid(e.target.value)} />
                                </div>
                                <div className="col-md-12 ">
                                    <input className="contactus" value={studentpassword} placeholder="Password*" type="password" name="password" required onChange={e=>setstudentpassword(e.target.value)} />
                                </div>
                                <div className="col-md-12">
                                    <center><button className="send_btn hover-green" onClick={studentLogin}>Get Started</button></center>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 bg-success border-radius-20 custom-border p-5">
                        <div className="col-md-12">
                            <div className="titlepage text_align_center ">
                                <h2 className='text-white'>Leader Login</h2>
                            </div>
                        </div>
                        <div className="main_form">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <input className="contactus" onChange={(e) => setleaderid(e.target.value)} placeholder="Leader Id*" type="text" name="userid" required />
                                </div>
                                <div className="col-md-12 ">
                                    <input className="contactus" onChange={(e) => setleaderpassword(e.target.value)} placeholder="Password*" type="password" name="password" required />
                                </div>
                                <div className="col-md-12">
                                    <center><button onClick={leaderLogin} className="send_btn hover-blue">Get Started</button></center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentLogin
