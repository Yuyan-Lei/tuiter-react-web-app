import React from "react";
import tuits from './tuits.json';
import TuitItem from "./tuit-item.js";

const TuitList = () => {
    return(
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <TuitItem item={tuit}/> )
            }
        </ul>
    );
};
export default TuitList;