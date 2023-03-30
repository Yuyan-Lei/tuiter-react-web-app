import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group"
             style={{minWidth: 'fit-content'}}>
            <a className="list-group-item">
                <i className="bi bi-twitter"></i>
            </a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home' || active === '' || active === undefined?'active':''}`}>
                <i className="bi bi-house-door-fill me-2"></i>
                <span className="wd-nav-bar-text d-none d-xl-inline">Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash me-2"></i>
                <span className="wd-nav-bar-text d-none d-xl-inline">Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-person-workspace me-2"></i>
                <span className="wd-nav-bar-text d-none d-xl-inline">Labs</span>
            </Link>

            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill me-2"></i>
                <span className="wd-nav-bar-text d-none d-xl-inline">Notifications</span>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill me-2"></i>
                <span className="wd-nav-bar-text d-none d-xl-inline">Messages</span>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill me-2"></i>
                <span className="wd-nav-bar-text d-none d-xl-inline">Bookmarks</span>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul me-2"></i>
                <span className="wd-nav-bar-text d-none d-xl-inline">Lists</span>
            </a>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill me-2"></i>
                <span className="wd-nav-bar-text d-none d-xl-inline">Profile</span>
            </Link>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots me-2"></i>
                <span className="wd-nav-bar-text d-none d-xl-inline">More</span>
            </a>
        </div>
    );
};

export default NavigationSidebar;