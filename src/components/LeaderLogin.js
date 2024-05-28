import React, { useState } from 'react';
import { db } from '../firebase-config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';   
import { useNavigate } from 'react-router-dom'; 

function LeaderLogin() {
    const [id, setid] = useState("");
    const [password, setpassword] = useState("");
    const teachersColl=collection(db,"teachers");
    const navigate=useNavigate();

    const Login=()=>{
        if(id==="" && password==="")return;
        const qery=query(teachersColl,where("teacherid","==",id),where("password","==",password));
        onSnapshot(qery,snapshot=>{
            if(snapshot.size===1)navigate('/teacherdashboard');
        });
    }
    return (
        <div className="contact">
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 bg-success rounded p-5">
                        <div className="col-md-12">
                            <div className="titlepage text_align_center">
                                <h2 className='text-white'>Leaders Login</h2>
                            </div>
                        </div>
                        <div className="main_form">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <input className="contactus" onChange={(e)=>setid(e.target.value)} placeholder="User Id*" type="text" name="userid"required />
                                </div>
                                <div className="col-md-12 ">
                                    <input className="contactus" onChange={(e)=>setpassword(e.target.value)} placeholder="Password*" type="password" name="password" required/>
                                </div>
                                <div className="col-md-12">
                                    <center><button onClick={Login} className="send_btn">Get Started</button></center>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    )
}

export default LeaderLogin
