import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }

    const itemStyle = {
        color: (props.affair.priority === 'high') ? 'red' : (props.affair.priority === 'middle') ? '#FF8C00' : '#013220'
    }


    return (
        <div className={s.item}>
            <span className={s.name}>{props.affair.name}</span><span className={s.priority}
                                                                     style={itemStyle}>[{props.affair.priority}]</span>
            <SuperButton onClick={deleteCallback}>x</SuperButton>

        </div>
    )
}

export default Affair
