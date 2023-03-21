import {createSlice} from "@reduxjs/toolkit";

const initialProfile = {
    firstName: 'Jose',
    lastName: 'Annunziato',
    handle: '@jannunzi',

    profilePicture: 'jose.png',
    bannerPicture: 'polyglot.png',

    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',

    location: 'Boston, MA',
    dateOfBirth: '7/7/1968',
    dateJoined: '4/2009',

    followingCount: 340,
    followersCount: 223
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfile,

    // reducers: {
    //     updateProfile: (state, action) => {
    //         firstName = action.payload.firstName;
    //         lastName = action.payload.lastName;
    //         bio = action.payload.bio;
    //         location = action.payload.location;
    //         website = action.payload.website;
    //     }
    // }
});

export default profileSlice.reducer;