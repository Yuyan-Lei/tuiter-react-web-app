import React from "react";
import {Routes, Route, Navigate} from "react-router";

import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import HomeComponent from "./home";
import PostSummaryList from "./post-summary-list";


function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route path="*" element={<Navigate to="explore" replace />} />
                </Routes>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <Routes>
                    <Route path="explore" element={<WhoToFollowList/>}/>
                    <Route path="home" element={<PostSummaryList/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Tuiter