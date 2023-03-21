import {useSelector} from "react-redux";
import React, {useState} from "react";

const EditProfile = () => {
    const [editBirthDate, setEditBirthDate] = useState(false);

    const profile = useSelector(state => state.profile);

    return (
        <div>
            {/*top bar*/}
            <div className="row">
                <div className="col-2 float-start">
                    <i className="bi bi-cancel"></i>
                </div>
                <div className="col-6 float-start">
                    Edit Profile
                </div>
                <div className="col-2 float-end">
                    <button type="button"
                            className="btn btn-dark">
                        Save
                    </button>
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
                <img src={profile.profilePicture}
                     width="100px" height="100px"
                     style={{position: 'relative', top: "-50%"}}
                     className={"ms-4 rounded"}/>
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

            {/*location*/}
            <div className="mb-2" style={{color: 'gray'}}>
                <span>{profile.location} </span>
            </div>

            {/*Website*/}
            <div className="mb-3">
                <input type="website" className="form-control"
                       placeholder="Website"/>
            </div>

            {/*Birthday*/}
            <div>
                <span style={{color: 'gray', fontSize: '14px'}}>Birth date · </span>
                <button type="button" className={"btn btn-outline-primary"}
                onClick={()=>setEditBirthDate(true)}>
                    Edit
                </button>
                {editBirthDate &&
                    <input type="date" className="form-control"/>
                }
                {!editBirthDate &&
                    <span>{profile.dateOfBirth}</span>
                }
            </div>

            <div>
                Switch to professional
            </div>

        </div>
    );
}

export default EditProfile;