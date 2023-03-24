import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitState = (
    {
        item = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    
    const dispatch = useDispatch();

    return (
        <div className="d-flex justify-content-between mt-2">
            <div className="d-flex">
                <i className="bi bi-chat me-1"></i>
                {item.replies}
            </div>
            <div className="d-flex">
                <i className="bi bi-repeat me-1"></i>
                {item.retuits}
            </div>
            <div className="d-flex">
                Likes: {item.likes}
                <i onClick={() => dispatch(updateTuitThunk({
                    ...item,
                    likes: item.likes + 1
                }))}
                   className="bi bi-heart-fill me-2 text-danger">
                </i>
            </div>
            <div className="d-flex">
                <i className="bi bi-upload"></i>
            </div>
            <div>
            </div>
        </div>
    );
}

export default TuitState;