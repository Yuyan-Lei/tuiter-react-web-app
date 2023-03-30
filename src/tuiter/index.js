import React from "react";
import {Routes, Route, Navigate} from "react-router";

import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import HomeComponent from "./home";
import PostSummaryList from "./post-summary-list";
import ProfileComponent from "./profile";

import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./profile/profile-reducer";
import postsReducer from "./post-summary-list/posts-reducer";
import EditProfile from "./profile/edit-profile";

const store = configureStore({
    reducer: {who: whoReducer, tuits: tuitsReducer, profile: profileReducer, posts: postsReducer}
});


function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2" style={{fontSize: "14px"}}>
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="home"    element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="editProfile" element={<EditProfile/>}/>
                        <Route path="*" element={<HomeComponent/>} />
                    </Routes>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter