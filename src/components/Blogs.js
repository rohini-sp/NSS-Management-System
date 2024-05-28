import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db, imageDB } from '../firebase-config';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import DeleteIcon from '@mui/icons-material/Delete';

function Blogs({logedinas}) {
    const [blogs, setblogs] = useState([])
    const getBlog = async (id) => {
        const docRef = doc(db, 'blogs', id);
        return await getDoc(docRef);
    }
    useEffect(() => {
        const listRef = ref(imageDB, 'blogimages');
        const unsub = () => {
            setblogs([]);
            listAll(listRef).then(res => {
                res.items.forEach(item => {
                    getDownloadURL(item).then(url => {
                        const docId = new URL(url).searchParams.get('token');
                        getBlog(docId).then(res => {
                            if (res.data()) {
                                setblogs(prev => [...prev, { ...res.data(), id: res.id, image: url }]);
                            }
                        })
                    })
                })
            })
        }
        return () => unsub();
    }, [])

    const deleteEvent=async(id)=>{
        if(!window.confirm("Sure to delete the post?"))return;
        const docRef=doc(db,'blogs',id)
        await deleteDoc(docRef).then(()=>{
            window.alert("Deleted event post successfully!")
        }).catch(e=>window.alert("Something Went Wrong"));
    }

    return (
        <div className="footer ">
            <div className="container px-5 d-flex align-items-center flex-column ">
                {
                    blogs && blogs.map(blog => {
                        return (
                            <div key={blog.id} className="card w-custom-80 mb-5 position-relative">
                                <img className="card-img-top" src={blog.image} alt={blog.title} />
                                <div className="card-body">
                                    <h2>{blog.title}</h2>
                                    <p className="card-text">{blog.content}</p>
                                    <div className='d-flex justify-content-between'>
                                        <div></div>
                                        <div><p className="card-text display-5 text-dark">{Date(blog.postedOn).toString().replace('GMT+0530 (India Standard Time)', '')}</p>
                                            <p className="card-text text-dark">~ {blog.author}</p></div>
                                    </div>
                                </div>
                                {logedinas!=="Student" && <span className="eventDelBtn position-absolute d-flex align-items-center justify-content-center text-white badge rounded-circle bg-theme-color" onClick={()=>deleteEvent(blog.id)}>
                                    <DeleteIcon  />
                                </span>}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blogs
