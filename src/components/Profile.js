import React from 'react'

function Profile({ user ,logedinas}) {
    return (
        <div className="contact">
            <div className="container mt-2">
                <div id="user-profile-2" class="user-profile">
                    <div class="tabbable">
                        <div class="tab-content no-border padding-24">
                            <div id="home" class="tab-pane in active">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-3 center">
                                        <span class="profile-picture">
                                            <img class="editable img-responsive" alt=" Avatar" id="avatar2" src="http://bootdey.com/img/Content/avatar/avatar6.png" />
                                        </span>
                                    </div>

                                    <div class="col-xs-12 col-sm-9">
                                        <div class="profile-user-info">
                                            <div class="profile-info-row">
                                                <div class="profile-info-name"> Name </div>

                                                <div class="profile-info-value">
                                                    <span>{user.fname} {user.lname}</span>
                                                </div>
                                            </div>
                                            {logedinas==="Student" && <div class="profile-info-row">
                                                <div class="profile-info-name"> Student Id </div>

                                                <div class="profile-info-value">
                                                    <span>{user.studentid}</span>
                                                </div>
                                            </div>}
                                            {logedinas==="Teacher" && <div class="profile-info-row">
                                                <div class="profile-info-name"> Teacher Id </div>

                                                <div class="profile-info-value">
                                                    <span>{user.teacherid}</span>
                                                </div>
                                            </div>}
                                            <div class="profile-info-row">
                                                <div class="profile-info-name"> Password </div>

                                                <div class="profile-info-value">
                                                    <span>{user.password}</span>
                                                </div>
                                            </div>

                                            {logedinas==="Student" &&  <><div class="profile-info-row">
                                                <div class="profile-info-name"> Roll No. </div>

                                                <div class="profile-info-value">
                                                    <span>{user.rollno}</span>
                                                </div>
                                            </div>

                                            <div class="profile-info-row">
                                                <div class="profile-info-name"> Class </div>

                                                <div class="profile-info-value">
                                                    <span>{user.class}</span>
                                                </div>
                                            </div></>}

                                            <div class="profile-info-row">
                                                <div class="profile-info-name"> Department </div>

                                                <div class="profile-info-value">
                                                    <span>{user.department}</span>
                                                </div>
                                            </div>

                                            <div class="profile-info-row">
                                                <div class="profile-info-name"> Email </div>

                                                <div class="profile-info-value">
                                                    <span>{user.email}</span>
                                                </div>
                                            </div>

                                            <div class="profile-info-row">
                                                <div class="profile-info-name"> Phone </div>

                                                <div class="profile-info-value">
                                                    <span>{user.phone}</span>
                                                </div>
                                            </div>

                                            <div class="profile-info-row">
                                                <div class="profile-info-name"> About </div>

                                                <div class="profile-info-value">
                                                    <span>{user.content}</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
