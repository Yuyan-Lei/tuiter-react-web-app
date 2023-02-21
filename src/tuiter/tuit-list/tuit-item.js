import React from 'react';

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
            <div>
                <img className={"rounded-10"} width={300} src={`/images/${item.image}`}/>
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
         <div className="square border rounded border-1 border-secondary">
                 <div>
                     <img className={"rounded-3"} width={40} src={`/images/${item['retweet-avatar']}`}/>
                     <span className={"fw-bolder"}>{item['retweet-author']}</span>
                     <span>{item['retweet-id']} · {item['retweet-time']}</span>
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
                <div>
                    {item["retweet-person"]} Retweeted
                </div>}
            <div className="row">
                {/* left - avatar photo*/}
                <div className="col-2">
                    <img className={"rounded-3"} width={40} src={`/images/${item.avatar}`}/>
                </div>

                {/* right - main contain */}
                <div className="col-10">
                    <div>
                        <span className={"fw-bolder"}>{item.author}</span>
                        <span>
                            {item.id} · {item.time}
                        </span>
                    </div>
                    <div>
                        {item.post}
                    </div>

                    {/* bottom - photo or retweet*/}
                    <div>
                        {TuitImage({item})}
                        {TuitContent({item})}
                    </div>

                    {/* likes, retweets, comments */}
                    <div className="row">
                        <div className="col-2">
                            {item.comments}
                        </div>
                        <div className="col-2">
                            {item.retweets}
                        </div>
                        <div className="col-2">
                            {item.likes}
                        </div>
                        <div className="col-2">
                            share icon
                        </div>
                    </div>
                    {/* top - retweet */}
                    {item["retweet-person"] === ''?
                        '':
                        <div>
                            <a href={"#"} style={{textDecoration: 'None'}}>Show this thread</a>
                        </div>}
                </div>
            </div>

        </div>
    );
};

export default TuitItem;