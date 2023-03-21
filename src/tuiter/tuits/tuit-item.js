import React from "react";
import Linkify from 'react-linkify';
import TuitState from "./tuit-state";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitsItem = (
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
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li className="list-group-item">

            {/* left - avatar photo*/}
            <div className="row">
                <div className="col-auto">
                    <img width={50}
                         className="float-end rounded-circle"
                         src={`/images/${item.image}`}/>
                </div>

                {/* right - main contain */}
                <div className={"col-10"}>
                    <div>
                        <span className={"fw-bolder"}>{item.userName}</span>
                        <i className="bi bi-check-circle-fill text-primary mx-1"></i>
                        <span className={"text-secondary"}>
                            {item.handle} · {item.time}
                        </span>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(item._id)}></i>
                    </div>
                    <div>
                        {item.tuit}
                    </div>

                    {/* likes, replies, comments */}
                    <TuitState item={item}/>
                </div>
            </div>
        </li>
    );
};

export default TuitsItem;