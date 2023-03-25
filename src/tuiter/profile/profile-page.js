import {useSelector} from "react-redux";
import React from "react";
import {Link} from "react-router-dom";

const ProfilePage = () => {
    const profile = useSelector(state => state.profile);

    const formatDateOfBirth = (dateString) => {
        const date = new Date(dateString);
        const options = { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    const formatDateJoined = (dateString) => {
        const [month, year] = dateString.split('/');
        const date = new Date(year, month - 1);
        return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
    };

    return (
        <div className="border">
            {/*top bar*/}
            <div className="d-flex px-4 py-1">
                <div className="col-1 d-flex align-items-center">
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div className="col-8">
                    <div className="d-flex flex-column">
                        <div style={{fontWeight:"bold", fontSize:18}}>{profile.firstName} {profile.lastName}</div>
                        <div style={{color: 'gray', fontSize:12}}>6,114 Tweets</div>
                    </div>
                </div>
            </div>

            {/*banner*/}
            <div>
                <img src={`/images/${profile.bannerPicture}`}
                     width="100%"
                     height="200px"/>
            </div>

            {/*profile picture*/}
            <div className="d-flex" style={{height: "80px"}}>
                <div>
                    <img src={`/images/${profile.profilePicture}`}
                            width="140px" height="140px"
                         style={{border: '3px solid white', marginTop: "-70px", marginLeft: "20px"}}
                    className={"ms-4 rounded-circle"}/>
                </div>
                <div className="mt-2"
                    style={{marginLeft: "auto", marginRight: "10px"}}>
                    <Link to="/tuiter/editProfile"
                          className="btn btn-outline-dark"
                          style={{borderRadius: "18px", borderColor:"lightgrey", fontWeight:"bold"}}
                          role="button">
                        Edit Profile
                    </Link>
                </div>
            </div>

            {/*name*/}
            <div className="px-4">
                <span style={{fontWeight:"bold", fontSize:22}}>{profile.firstName} {profile.lastName}</span>
                <p style={{color: 'gray'}}>{profile.handle}</p>
            </div>

            {/*bio*/}
            <div className="mb-2 px-4">
                {profile.bio}
            </div>

            {/*location, birthday, dateJoined*/}
            <div className="mb-2 px-4" style={{color: 'gray'}}>
                <i className="bi bi-geo-alt me-1"></i>
                <span>{profile.location} </span>
                <i className="bi bi-lightbulb ms-2 me-1"></i>
                <span>Born {formatDateOfBirth(profile.dateOfBirth)} </span>
                <i className="bi bi-calendar3 ms-2 me-1"></i>
                <span>Joined {formatDateJoined(profile.dateJoined)}</span>
            </div>

            {/*following, followers*/}
            <div className="px-4 pb-4">
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