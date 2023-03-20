import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item.js";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
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