import React from "react";
import {Provider, useSelector} from "react-redux";
import { configureStore } from '@reduxjs/toolkit';

import tuits from "./tuits-reducer.js";
import TuitsList from "./tuit-item.js";

const store = configureStore({
    reducer: {tuits}
});

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    return(
        <Provider store={store}>
            <TuitsList TuitsArray={tuits}/>
        </Provider>
    );
};
export default TuitList;