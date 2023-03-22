import {createSlice} from "@reduxjs/toolkit";

const initialProfile = {
    firstName: 'Jose',
    lastName: 'Annunziato',
    handle: '@jannunzi',

    profilePicture: '../../../public/images/profileImage.jpg',
    bannerPicture: 'polyglot.png',

    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
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

    reducers: {
        updateProfile: (state, action) => {
            state.firstName = action.payload.name.split(' ')[0];
            state.lastName = action.payload.name.split(' ')[1];
            state.bio = action.payload.bio;
            state.location = action.payload.location;
            state.website = action.payload.website;
            console.log(state);
        },
    }
});

export default profileSlice.reducer;
export const {updateProfile} = profileSlice.actions;
