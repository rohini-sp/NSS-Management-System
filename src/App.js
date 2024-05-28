import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TeacherLogin from './components/TeacherLogin';
import TeacherDashBoard from './components/AddStudent';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import AddAdmin from './components/AddAdmin';
import AdminList from './components/AdminList';
import AddBlog from './components/AddBlog';
import Blogs from './components/Blogs';
import Home from './components/Home';
import EventList from './components/EventList';
import MarkAttendance from './components/MarkAttendance';
import { useState } from 'react';
import MyAttendance from './components/MyAttendance';
import Profile from './components/Profile';

function App() {
  const [loggedin, setloggedin] = useState(sessionStorage.getItem("user-type"));
  const [user, setuser] = useState(JSON.parse(sessionStorage.getItem("user")));
  return (<>
    {
      !loggedin && <Login setloggedin={setloggedin} setuser={setuser}/>
    }
    {loggedin==="Teacher" && <Router>
    <Header logedinas={"Teacher"} setloggedin={setloggedin}/>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route exact path="teacherdashboard" element={<TeacherDashBoard/>}/>
        <Route exact path="addstudent" element={<AddStudent/>}/>
        <Route exact path="studentlist" element={<StudentList/>}/>
        <Route exact path="addadmin" element={<AddAdmin/>}/>
        <Route exact path="adminlist" element={<AdminList/>}/>
        <Route exact path="addblog" element={<AddBlog/>}/>
        <Route exact path="blogs" element={<Blogs/>}/>
        <Route exact path="eventlist" element={<EventList/>}/>  
        <Route exact path="markattendance/:eventid" element={<MarkAttendance/>}/>
        <Route exact path="profile" element={<Profile logedinas={loggedin} user={user}/>}/>
      </Routes>
    </Router>}

    {loggedin==="Student" && <Router>
    <Header logedinas={"Student"} setloggedin={setloggedin}/>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route exact path="blogs" element={<Blogs logedinas={"Student"}/>}/>
        <Route exact path="myattendance" element={<MyAttendance user={user}/>}/>
        <Route exact path="profile" element={<Profile logedinas={loggedin} user={user}/>}/>
      </Routes>
    </Router>}
  </>);
}

export default App;
