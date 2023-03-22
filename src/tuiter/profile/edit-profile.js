import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {updateProfile} from "./profile-reducer"
import {Link} from "react-router-dom";

const EditProfile = () => {
    const [editBirthDate, setEditBirthDate] = useState(false);

    const profile = useSelector(state => state.profile);

    const [newProfile, setNewProfile] = useState({
        name: profile.firstName + " " + profile.lastName,
        location: profile.location,
        bio: profile.bio,
        website: profile.website,
        dateOfBirth: profile.dateOfBirth,
    });

    const nameChangeHandler = (event) => {
        const nameValue = event.target.value;
        const temp = {
            ...newProfile,
            name: nameValue
        };
        setNewProfile(temp);
    }

    const bioChangeHandler = (event) => {
        const bioValue = event.target.value;
        const temp = {
            ...newProfile,
            bio: bioValue
        };
        setNewProfile(temp);
    }

    const locationChangeHandler = (event) => {
        const locationValue = event.target.value;
        const temp = {
            ...newProfile,
            location: locationValue
        };
        setNewProfile(temp);
    }

    const websiteChangeHandler = (event) => {
        const websiteValue = event.target.value;
        const temp = {
            ...newProfile,
            website: websiteValue
        };
        setNewProfile(temp);
    }

    const dispatch = useDispatch();
    const toggleProfileSave = (newProfile) => {
        dispatch(updateProfile(newProfile));
    }

    return (
        <div>
            {/*top bar*/}
            <div className="row">
                <div className="col-1 float-start">
                    <Link to="/tuiter/profile" style={{color:'grey'}}>
                        <i className="bi bi-x-lg"></i>
                    </Link>
                </div>
                <div className="col-9 float-start">
                    Edit Profile
                </div>
                <div className="col-2 float-end">
                    <Link to="/tuiter/profile"
                          className="btn btn-dark"
                          style={{borderRadius: "18px", borderColor:"lightgrey"}}
                          role="button"
                          onClick={()=>toggleProfileSave(newProfile)}>
                        Save
                    </Link>
                </div>
            </div>

            {/*banner*/}
            <div>
                <img src={`/images/${profile.bannerPicture}`}
                     width="100%"
                     height="200px"/>
            </div>

            {/*profile picture*/}
            <div>
                <img src={`/images/${profile.profilePicture}`}
                     width="100px" height="100px"
                     style={{position: 'relative', top: "-50%"}}
                     className={"ms-4 rounded-circle"}/>
            </div>

            {/*name*/}
            <div className="mb-4">
                <span  style={{color: 'gray'}}>Name</span>
                <input className="form-control"
                       placeholder="Name"
                       value={newProfile.name}
                       onChange={nameChangeHandler}
                />
            </div>

            {/*bio*/}
            <div className="mb-4">
                <span  style={{color: 'gray'}}>Bio</span>
                <textarea className="form-control"
                       placeholder="Bio"
                       value={newProfile.bio}
                      onChange={bioChangeHandler}
                />
            </div>

            {/*location*/}
            <div className="mb-4">
                <span  style={{color: 'gray'}}>Location</span>
                <input className="form-control"
                       placeholder="Location"
                       value={newProfile.location}
                       onChange={locationChangeHandler}

                />
            </div>

            {/*Website*/}
            <div className="mb-3">
                <input type="website" className="form-control"
                       placeholder="Website"
                        value={newProfile.website}
                        onChange={websiteChangeHandler}/>
            </div>

            {/*Birthday*/}
            <div className="mb-4">
                <span style={{color: 'gray', fontSize: '14px'}}>Birth date · </span>
                <button type="button" className={"btn btn-outline-primary"}
                onClick={()=>setEditBirthDate(!editBirthDate)}>
                    {!editBirthDate && "Edit"}
                    {editBirthDate && "Done"}
                </button>
                <div>
                    {editBirthDate &&
                        <input type="date" className="form-control" value={newProfile.dateOfBirth}/>
                    }
                    {!editBirthDate &&
                        <span>{newProfile.dateOfBirth}</span>
                    }
                </div>
            </div>

            <div>
                Switch to professional
            </div>

        </div>
    );
}

export default EditProfile;