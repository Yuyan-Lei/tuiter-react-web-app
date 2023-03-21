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
                     width="200px"
                     height="400px"/>
            </div>

            {/*profile picture*/}
            <div className="row">
                <div className="float-start">
                    <img src={profile.profilePicture}
                            width="100px" height="100px"/>
                </div>
                <div className="float-end">
                    <button className="btn btn-primary">Edit Profile</button>
                </div>
            </div>

            {/*name*/}
            <div>
                <h1>{profile.firstName} {profile.lastName}</h1>
                <p>{profile.handle}</p>
                <br/>
            </div>

            {/*bio*/}
            <div>
                <p>{profile.bio}</p>
                <br/>
            </div>

            {/*location, birthday, dateJoined*/}
            <div>
                <span>{profile.location} </span>
                <span>Born {profile.dateOfBirth} </span>
                <span>Joined {profile.dateJoined}</span>
            </div>

            {/*following, followers*/}
            <div>
                <span>{profile.followingCount} Following </span>
                <span>{profile.followersCount} Followers</span>
            </div>

        </div>
    );
}

export default ProfilePage;