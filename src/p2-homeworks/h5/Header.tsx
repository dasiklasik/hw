import React from 'react'
import {NavLink} from 'react-router-dom'
import {pathType} from "./Routes";
import './Header.css'

type headerPropsType = {
    paths: pathType
}

function Header(props: headerPropsType) {
    return (
        <div>
            <div className={'btn'}>
                <div className={"header"}>
                    <div>
                        <NavLink className={'link'} to={props.paths.PRE_JUNIOR}>pre junior</NavLink>
                        <NavLink className={'link'} to={props.paths.JUNIOR}>junior</NavLink>
                        <NavLink className={'link'} to={props.paths.JUNIOR_PLUS}>junior+</NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
