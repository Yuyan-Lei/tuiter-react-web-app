import React from "react";
import Linkify from 'react-linkify';

const PostSummaryItem = (
    {
        item = {
            "author": "SpaceX",
            "id": "@SpaceX",
            "avatar": "spacex.png",
            "time": "2h",
            "post": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.",
            "comments": "123",
            "retweets": "432",
            "likes": "2345"
        }
    }
) => {
    return (
        <div className="list-group-item">

            <div className="d-flex">
                {/* left - avatar photo*/}
                <div>
                    <img className="rounded-circle" width={40} src={`/images/${item.avatar}`}/>
                </div>

                {/* right - main contain */}
                <div class={"ms-2"}>
                    <div>
                        <span className={"fw-bolder"}>{item.author}</span>
                        <i className="bi bi-check-circle-fill text-primary mx-1"></i>
                        <span className={"text-secondary"}>
                            {item.id} · {item.time}
                        </span>
                        <i className="bi bi-three-dots float-end"></i>
                    </div>
                    <Linkify>
                        {item.post}
                    </Linkify>

                    {/* likes, retweets, comments */}
                    <div className="d-flex justify-content-between mt-2">
                        <div className="d-flex">
                            <i className="bi bi-chat me-1"></i>
                            {item.comments}
                        </div>
                        <div className="d-flex">
                            <i className="bi bi-repeat me-1"></i>
                            {item.retweets}
                        </div>
                        <div className="d-flex">
                            <i className="bi bi-heart me-1"></i>
                            {item.likes}
                        </div>
                        <div className="d-flex">
                            <i className="bi bi-upload"></i>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PostSummaryItem;