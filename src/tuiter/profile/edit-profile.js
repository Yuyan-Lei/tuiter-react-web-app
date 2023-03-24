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

    const formatDateOfBirth = (dateString) => {
        const date = new Date(dateString);
        const options = { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

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

    const dateOfBirthChangeHandler = (event) => {
        const dateOfBirthValue = event.target.value;
        const temp = {
            ...newProfile,
            dateOfBirth: dateOfBirthValue
        };
        setNewProfile(temp);
    }

    const dispatch = useDispatch();
    const toggleProfileSave = (newProfile) => {
        dispatch(updateProfile(newProfile));
    }

    return (
        <div className="border rounded">
            {/*top bar*/}
            <div className="row align-items-center p-2">
                <div className="col-1 float-start">
                    <Link to="/tuiter/profile" style={{color:'grey'}}>
                        <i className="bi bi-x-lg"></i>
                    </Link>
                </div>
                <div className="col-9 float-start" style={{ fontWeight: "bold"}}>
                    Edit Profile
                </div>
                <div className="col-2 float-end">
                    <Link to="/tuiter/profile"
                          className="btn btn-dark"
                          style={{borderRadius: "18px", fontSize: 14, fontWeight: "bold", paddingTop: "3px", paddingBottom: "3px"}}
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
            <div className="d-flex">
                <div>
                    <img src={`/images/${profile.profilePicture}`}
                     width="100px" height="100px"
                     style={{position: 'relative', top: "-50%"}}
                     className={"ms-4 rounded-circle"}/>
                </div>
            </div>

            {/*name*/}
            <div className="form-floating mb-4 mx-2">
                <input className="form-control"
                       id="nameInput"
                       placeholder="Name"
                       value={newProfile.name}
                       onChange={nameChangeHandler}
                />
                <label for="nameInput">Name</label>
            </div>

            {/*bio*/}
            <div className="mb-4 form-floating mx-2">
                <textarea className="form-control"
                       style={{height: '100px'}}
                       id="bioInput"
                       placeholder="Bio"
                       value={newProfile.bio}
                      onChange={bioChangeHandler}
                />
                <label for="bioInput">Bio</label>
            </div>

            {/*location*/}
            <div className="mb-4 form-floating mx-2">
                <input className="form-control"
                       id="locationInput"
                       placeholder="Location"
                       value={newProfile.location}
                       onChange={locationChangeHandler}

                />
                <label for="locationInput">Location</label>
            </div>

            {/*Website*/}
            <div className="mb-3 form-floating mx-2">
                <input type="website" className="form-control"
                       id="websiteInput"
                       placeholder="Website"
                        value={newProfile.website}
                        onChange={websiteChangeHandler}/>
                <label for="websiteInput">Website</label>
            </div>

            {/*Birthday*/}
            <div className="mb-4 mx-2">
                <div className="column align-items-center">
                    <span style={{color: 'gray', fontSize: '14px'}}>Birth date · </span>
                    <button type="button" className={"btn p-0"}
                    style={{
                        borderColor: "transparent",
                        fontSize: 14,
                        verticalAlign: "baseline",
                        color: "rgb(29, 161, 242)"}}
                    onClick={()=>setEditBirthDate(!editBirthDate)}>
                        {!editBirthDate && "Edit"}
                        {editBirthDate && "Done"}
                    </button>
                </div>
                <div>
                    {editBirthDate &&
                        <input 
                            type="date" 
                            className="form-control" 
                            value={newProfile.dateOfBirth}
                            onChange={dateOfBirthChangeHandler}/>
                    }
                    {!editBirthDate &&
                        <span>{formatDateOfBirth(newProfile.dateOfBirth)}</span>
                    }
                </div>
            </div>

            <div className="mx-2 column mb-4">
                <span>Switch to professional</span>
                <i class="bi bi-chevron-right float-end"></i>
            </div>

        </div>
    );
}

export default EditProfile;