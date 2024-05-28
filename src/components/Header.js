import React from 'react';
import { Link } from 'react-router-dom';

function Header({ setloggedin, logedinas }) {
    const logout=()=>{
        setloggedin(null);
        sessionStorage.setItem("user",null);
    }
    return (
        <div className="header border border-bottom">
            <div className="container-fluid">
                <div className="row">
                    <div className=" col-md-2 col-sm-3 col logo_section">
                        <div className="full">
                            <div className="center-desk">
                                <div className="logo">
                                    <Link to="/"><img src={`${process.env.PUBLIC_URL + "assets/images/logo.png"}`} alt="#" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <nav className="navigation navbar navbar-expand-md navbar-dark ">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarsExample04">
                                <ul className="navbar-nav mr-auto">
                                    {logedinas === "Teacher" && <><li className="nav-item dropdown mr-1">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Students
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link className="dropdown-item" to="/addstudent">Add Student</Link>
                                            <Link className="dropdown-item" to="/studentlist">Student List</Link>
                                        </div>
                                    </li>
                                        <li className="nav-item dropdown mr-1">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Admins
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <Link className="dropdown-item" to="addadmin">Add Admin</Link>
                                                <Link className="dropdown-item" to="adminlist">Admin List</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown mr-1">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Blogs
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <Link className="dropdown-item" to="addblog">Add Blog</Link>
                                                <Link className="dropdown-item" to="blogs">Blog List</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown mr-1">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Attendance
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <Link className="dropdown-item" to="eventlist">Mark Attendance</Link>
                                                {/* <Link className="dropdown-item" to="blogs">Blog List</Link> */}
                                            </div>
                                        </li></>}
                                    {logedinas === "Student" && <>
                                        <li className="nav-item mx-2">
                                            <Link className="nav-link" to="myattendance">My Attendance</Link>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <Link className="nav-link" to="blogs">Events</Link>
                                        </li>
                                    </>}
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-md-2">
                        <ul className="email text_align_right d-flex align-items-center">
                            <li className="d_none p-0 mb-2"><Link to="profile"><i className="fa fa-user px-2 py-2 bg-theme-color text-white rounded-circle" aria-hidden="true"></i></Link></li>
                            <li className="d_none"> <button onClick={logout} className=' bg-theme-color rounded-circle'><i className="fa fa-sign-out p-2  text-white" style={{ cursor: "pointer" }} aria-hidden="true"></i></button> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
