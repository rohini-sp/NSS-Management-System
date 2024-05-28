import { addDoc, collection } from 'firebase/firestore'
import React,{useState} from 'react'
import { db } from '../firebase-config'

function AddAdmin() {
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")
    const [department, setdepartment] = useState("")
    const [content, setcontent] = useState("")
    const [yearofjoin, setyearofjoin] = useState("")
    const addStudent=async(e)=>{
        e.preventDefault();
        if(fname==="" || lname==="" || phone==="" || email==="" || department==="Department*" || yearofjoin==="" ){
            console.log("Empty field")
            window.alert("Please, fill all the fields!!");
            return;
        }
        const studentColl=collection(db,"teachers");
        await addDoc(studentColl,{
            fname,
            lname,
            phone,
            email,
            department,
            content,
            yearofjoin,
            teacherid: phone,
            password: fname.toLowerCase()+phone
        }
        ).then(()=>{
            window.alert("Added Admin successfully!")
        })
        setfname("");
        setlname("");
        setphone("");
        setemail("");
        setcontent("");
        setyearofjoin("");  
    }
    return (
        <footer>
            <div className="footer ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 border_left">
                            <h1 className='h1 mb-5'>Add Admin</h1>
                            <div id="request" className="main_form">
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <input className="contactus" placeholder="First Name*" type="type" name="fname" onChange={(e)=>setfname(e.target.value)} value={fname} required/>
                                    </div>
                                    <div className="col-md-6">
                                        <input className="contactus" placeholder="Last Name*" type="type" name="lname"  onChange={(e)=>setlname(e.target.value)} value={lname}  required/>
                                    </div>
                                    <div className="col-md-6 ">
                                        <input className="contactus" placeholder="Phone Number*" type="number" maxLength={10} minLength={10} name="phone"  onChange={(e)=>setphone(e.target.value)} value={phone}  required/>
                                    </div>
                                    <div className="col-md-6">
                                        <input className="contactus" placeholder="Email*" type="email" name="email" onChange={(e)=>setemail(e.target.value)}  value={email} required/>
                                    </div>
                                    <div className="col-md-6">
                                        <input className="contactus" placeholder="Year of Joining*" type="date" name="rollno" onChange={(e)=>setyearofjoin(e.target.value.toString())}  value={yearofjoin} required/>
                                    </div>
                                    <div className="col-md-6 select-outline"  required>
                                        <select className="custom-select "  value={department} onChange={(e)=>setdepartment(e.target.value)}>
                                            <option selected>Department*</option>
                                            <option value="CS">CS</option>
                                            <option value="BAF">BAF</option>
                                            <option value="IT">IT</option>
                                            <option value="BCOM">BCOM</option>
                                            <option value="Plain Bsc">Plain Bsc</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12">
                                        <textarea className="textarea" placeholder="About Admin" type="text" name='about'  value={content}  onChange={(e)=>setcontent(e.target.value)}></textarea>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="send_btn" onClick={addStudent}>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default AddAdmin
