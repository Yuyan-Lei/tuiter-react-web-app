import React from "react";
import TuitsItem from "./tuit-item.js";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const TuitsArray = useSelector(state => state.tuits);
    return(
        <ul className="list-group">
            {
                TuitsArray.map(item =>
                    <TuitsItem
                        key={item._id}
                        item={item}
                    />
                )
            }
        </ul>
    );
};
export default TuitsList;