import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { db, imageDB } from '../firebase-config';
import { v4 } from 'uuid';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

function AddBlog() {
    const [content, setcontent] = useState("");
    const [title, settitle] = useState("")
    const [image, setimage] = useState("https://www.freeiconspng.com/uploads/upload-icon-13.png");
    const imageRef = useRef(null);

    const addBlog = () => {
        if(title==="" || content===""){
            window.alert("All fields are required");
            return;
        }else if(image==="https://www.freeiconspng.com/uploads/upload-icon-13.png"){
            window.alert("Please Select an image");
            return;
        }
        const imageDbRef = ref(imageDB, `blogimages/${v4()}`);
        let urlInfo;
        uploadBytes(imageDbRef, image).then(snapshot => {
            getDownloadURL(imageDbRef).then(url => {
                setimage(url);
                urlInfo=new URL(url);
            }).then(()=>{
                const docRef=doc(db,'blogs',urlInfo.searchParams.get('token'))
                setDoc(docRef,{
                    content,
                    title,
                    postedOn: serverTimestamp(),
                    author: JSON.parse(sessionStorage.getItem('user')).fname,
                    attendance:{
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
                    },
                    marked:false
                }).then(()=>{
                    document.getElementById('img').src="https://www.freeiconspng.com/uploads/upload-icon-13.png";
                    setimage("https://www.freeiconspng.com/uploads/upload-icon-13.png");
                    settitle("");
                    setcontent("");
                })
            }).catch(e=>console.log(e))
        }).catch(e=>console.log(e)) 
    }

    const selectImg = (e) => {
        var path = (window.URL || window.webkitURL).createObjectURL(e.target.files[0]);
        document.getElementById('img').src=path;
        setimage(e.target.files[0])
    }
    return (
        <footer>
            <div className="footer">
                <div className="mx-2">
                    <div className="row">
                        <div className="col-md-6">
                            <Image src="https://www.freeiconspng.com/uploads/upload-icon-13.png" id='img' onClick={() => imageRef.current.click()} alt="" />
                            <input type="file" className="d-none" onChange={selectImg} ref={imageRef} />
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center border_left">
                            <h1 className='h1 mb-3' style={{textAlign:"start"}}>Add Blog</h1>
                            <input type="text" value={title} onChange={e=>settitle(e.target.value)} placeholder='Title' className='w-100 blockquote p-2 rounded border border-dark mb-0' required />
                            <BlogContent placeholder='Blog Content' value={content} onChange={(e) => setcontent(e.target.value)} cols="30" rows="10" className='textarea rounded' required></BlogContent>
                            <AddBlogButton onClick={addBlog}>Add Blog</AddBlogButton>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default AddBlog

const Image = styled.img`
    object-fit:cover;
    border-radius: 20px;
    width:100%;
    max-height:100%;
    cursor:pointer;
    padding:2vh;
`

const BlogContent = styled.textarea`
width:100%;
max-height:30vh;
padding:1vh;
font-size:20px;
margin:2vh 0;
`

const AddBlogButton = styled.button`
font-size: 18px;
transition: ease-in all 0.5s;
background-color: #f0390f;
text-transform: uppercase;
color: #fff;
max-width: 193px;
width: 100%;
display: block;
font-weight: 600;
height: 53px;
border-radius: 10px;
padding: 13px 0;
&:hover{
    transform:scale(1.05);
    transition:all 0.2s ease-in-out;
}
`