import {createSlice} from "@reduxjs/toolkit";

const initialProfile = {
    firstName: 'Yuyan',
    lastName: 'Lei',
    handle: '@yuyanlei',

    profilePicture: 'profileImage.jpg',
    bannerPicture: 'bannerImage.png',

    bio: 'Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',

    location: 'San Jose, CA',
    dateOfBirth: '1997-12-21',
    dateJoined: '1/2022',

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
            state.dateOfBirth = action.payload.dateOfBirth;
            console.log(state);
        },
    }
});

export default profileSlice.reducer;
export const {updateProfile} = profileSlice.actions;
