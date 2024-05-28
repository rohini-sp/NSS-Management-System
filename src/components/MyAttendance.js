import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect,useState } from 'react'
import { db } from '../firebase-config'

function MyAttendance({user}) {
    const [attendance, setattendance] = useState([])
    useEffect(() => {
      const coll=collection(db,'blogs');
      const key=user.class+'-'+user.department;
      setattendance([]);
      const unsub=onSnapshot(coll,snapshot=>{
        snapshot.forEach(blog=>{
            if(blog){
                console.log(key)
                const data=blog.data();
                setattendance(prev=>[...prev,{title:data.title,present:data.attendance[key].includes(user.rollno)}]);
            }
        })
      })
      return () =>unsub();
    }, [])
    
    return (
        <div className="contact">
            <div className="container mt-5">
                <h1 className='h1 mb-3'>Events</h1>
                <div class="list-group">
                    <li class="bg-theme-color text-white list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        <p># Events name</p>
                        <p>Present/absent</p>
                    </li>
                </div>
                <div class="list-group">
                    {attendance && attendance.map((item,index)=><li key={index} class="list-group-item custom-hover d-flex justify-content-between align-items-center">
                        <p>{index+1}. {item.title}</p>
                        {item.present && <div className='present'></div>}
                    </li>)}
                </div>
            </div>
        </div>
    )
}

export default MyAttendance
