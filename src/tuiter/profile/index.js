import React from "react";
import {Provider} from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import ProfilePage from "./profile-page";
import profile from "./profile-reducer";

const store = configureStore({
    reducer: {profile}
});

const ProfileComponent = () => {
    return(
        <Provider store={store}>
            <div>
                <ProfilePage/>
            </div>
        </Provider>
    );
};
export default ProfileComponent;