import React from "react";
import {HW13} from "../../HW13/HW13";
import {Provider} from "react-redux";
import { juniorPlusStore } from "../../HW13/bll/junior+Store";

export const JuniorPlus = () => {
    return (
        <div>
            <Provider store={juniorPlusStore}>
                <HW13/>
            </Provider>
        </div>
    )
}