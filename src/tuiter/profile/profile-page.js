import {useSelector} from "react-redux";
import React from "react";

const ProfilePage = () => {
    const profile = useSelector(state => state.profile);
    return (
        <div>
            {/*top bar*/}
            <div className="row">
                <div className="col-2 float-start">
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div className="col-8 float-start">
                    <div className="col">
                    <div>{profile.firstName} {profile.lastName}</div>
                    <div>6,114 Tweets</div>
                    </div>
                </div>
            </div>

            {/*banner*/}
            <div>
                <img src={profile.bannerPicture}
                     width="100%"
                     height="200px"/>
            </div>

            {/*profile picture*/}
            <div className="row">
                <div className="col-8">
                    <img src={profile.profilePicture}
                            width="100px" height="100px"
                         style={{position: 'relative', top: "-50%"}}
                    className={"ms-4 rounded"}/>
                </div>
                <div className="col-4 mt-2">
                    <a href="#"
                       className="btn btn-outline-dark ms-5"
                       style={{borderRadius: "18px", borderColor:"lightgrey", fontWeight:"bold"}}
                       role="button">
                        Edit Profile
                    </a>
                </div>
            </div>

            {/*name*/}
            <div>
                <span style={{fontWeight:"bold", fontSize:22}}>{profile.firstName} {profile.lastName}</span>
                <p style={{color: 'gray'}}>{profile.handle}</p>
            </div>

            {/*bio*/}
            <div className="mb-2">
                {profile.bio}
            </div>

            {/*location, birthday, dateJoined*/}
            <div className="mb-2" style={{color: 'gray'}}>
                <i className="bi bi-geo-alt me-1"></i>
                <span>{profile.location} </span>
                <i className="bi bi-lightbulb ms-2 me-1"></i>
                <span>Born {profile.dateOfBirth} </span>
                <i className="bi bi-calendar3 ms-2 me-1"></i>
                <span>Joined {profile.dateJoined}</span>
            </div>

            {/*following, followers*/}
            <div>
                <span>
                    <span style={{fontWeight:"bold"}}>{profile.followingCount}</span>
                    <span className="ms-1 me-4" style={{color: 'grey'}}>Following</span>
                </span>
                <span>
                    <span style={{fontWeight:"bold"}}>{profile.followersCount}</span>
                    <span className="ms-1 me-4" style={{color: 'grey'}}>Followers</span>
                </span>
            </div>

        </div>
    );
}

export default ProfilePage;