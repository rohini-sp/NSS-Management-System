import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect,useState } from 'react'
import { db } from '../firebase-config'

function EventList() {
    const [blogs, setblogs] = useState([])
    useEffect(() => {
      const coll=collection(db,'blogs');  
      const q=query(coll,orderBy("postedOn"));
      const unsub=onSnapshot(q,snapshot=>{
        setblogs([]);
        snapshot.forEach(blog=>{
            setblogs(blogs=>[...blogs,{...blog.data(),id:blog.id}]);
        })
      });
      return () => unsub();
    }, [])
    
    return (
        <div className="contact">
            <div className="container mt-5">
                <ul className="list-group">
                    {
                        blogs.map((blog,index)=>{
                            return <a key={blog.id} href={"markattendance/"+blog.id} className="list-group-item font-theme bg-hover-theme d-flex justify-content-between align-items-center">
                                <span>{index+1}.</span>
                                <span>{blog.title}</span>
                                <span>{blog.marked && <div className='present border border-light'></div>}</span>
                            </a>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default EventList
