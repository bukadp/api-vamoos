import React from "react";
import {flightsHandler} from "../utils/flightsHandler";
import {NavLink} from "react-router-dom";
import BriefContainerWithRout from "./BriefContainer";
import BriefContainer from "./BriefContainer";


function Brief(props) {
    return (
        <div>
            <div className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 py-2 mx-auto border-2">
                <NavLink to={'/brief/' + (props.id)}>
                    <div>{`${props.day} day. ${props.headline}`}</div>
                </NavLink>
            </div>
        </div>
    )
}

export default Brief;
