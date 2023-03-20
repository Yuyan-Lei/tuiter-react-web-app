import React from 'react';
import Linkify from 'react-linkify';

const TuitImage = (
    {
        item = {
            "author": "Elon Musk",
            "id": "@elonmusk",
            "avatar": "star.png",
            "time": "15h",
            "post": "We might need a different name, as this is basically just Starlink with roaming capability, so you can take your terminal anywhere.",
            "image": "",
            "retweet-author": "SpaceX",
            "retweet-id": "@SpaceX",
            "retweet-avatar": "spacex.png",
            "retweet-time": "16h",
            "retweet-post": "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage → http://starlink.com/rv",
            "comments": "5,346",
            "retweets": "1,601",
            "likes": "19.2K",
            "retweet-person": "Elon Musk"
        }
    }
) => {
    if (item.image !== '') {
        return (
            <div className="square rounded border-1 border-secondary overflow-hidden">
                <img className="img-fluid" src={`/images/${item.image}`}/>
            </div>
        )
    }
}

const TuitContent = (
    {
        item = {
            "author": "Elon Musk",
            "id": "@elonmusk",
            "avatar": "star.png",
            "time": "15h",
            "post": "We might need a different name, as this is basically just Starlink with roaming capability, so you can take your terminal anywhere.",
            "image": "",
            "retweet-author": "SpaceX",
            "retweet-id": "@SpaceX",
            "retweet-avatar": "spacex.png",
            "retweet-time": "16h",
            "retweet-post": "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage → http://starlink.com/rv",
            "comments": "5,346",
            "retweets": "1,601",
            "likes": "19.2K",
            "retweet-person": "Elon Musk"
        }
    }
) => {
    if ((item["retweet-author"]) !== '') {
     return (
         <div className="square border rounded border-1 border-light p-2">
                 <div>
                     <img className={"rounded-circle"} width={40} src={`/images/${item['retweet-avatar']}`}/>
                     <span className={"fw-bolder ms-1"}>{item['retweet-author']}</span>
                     <i className="bi bi-check-circle-fill text-primary mx-1"></i>
                     <span className={"text-secondary"}>{item['retweet-id']} · {item['retweet-time']}</span>
                 </div>
                 <div>
                     {item['retweet-post']}
                 </div>
         </div>
     )
    }
}

const TuitItem = (
    {
        item = {
            "author": "Elon Musk",
            "id": "@elonmusk",
            "avatar": "star.png",
            "time": "15h",
            "post": "We might need a different name, as this is basically just Starlink with roaming capability, so you can take your terminal anywhere.",
            "image": "",
            "retweet-author": "SpaceX",
            "retweet-id": "@SpaceX",
            "retweet-avatar": "spacex.png",
            "retweet-time": "16h",
            "retweet-post": "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage → http://starlink.com/rv",
            "comments": "5,346",
            "retweets": "1,601",
            "likes": "19.2K",
            "retweet-person": "Elon Musk"
        }
    }
) => {
    return (
        <div className="list-group-item">
            {/* top - retweet */}
            {item["retweet-person"] === ''?
                '':
                <div className="text-secondary fw-bolder ms-4">
                    <i className="bi bi-repeat me-1"></i>
                    {item["retweet-person"]} Retweeted
                </div>}
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

                    {/* bottom - photo or retweet*/}
                    <div>
                        {TuitImage({item})}
                        {TuitContent({item})}
                    </div>

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
                    {/* top - retweet */}
                    {item["retweet-person"] === ''?
                        '':
                        <div className={"mt-2"}>
                            <a href={"#"} style={{textDecoration: 'None'}}>Show this thread</a>
                        </div>}
                </div>
            </div>

        </div>
    );
};

export default TuitItem;