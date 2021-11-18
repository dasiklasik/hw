import React from 'react'
import { NavLink } from 'react-router-dom'
import {pathType} from "./Routes";

type headerPropsType = {
    paths: pathType
}

function Header(props: headerPropsType) {
    return (
        <div>
            <NavLink to={props.paths.PRE_JUNIOR}>pre junior</NavLink>
            <NavLink to={props.paths.JUNIOR}>junior</NavLink>
            <NavLink to={props.paths.JUNIOR_PLUS}>junior+</NavLink>
        </div>
    )
}

export default Header
