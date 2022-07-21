import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {juniorPlusStoreType} from "./bll/junior+Store";
import {changeSuccess, setSuccess} from "./bll/requestReducer";
import {AnyAction, ThunkDispatch} from "@reduxjs/toolkit";

export const Request = () => {

    const checked = useSelector<juniorPlusStoreType, boolean>(state => state.request.success)
    const error = useSelector<juniorPlusStoreType, string|null>(state => state.request.error)
    const info = useSelector<juniorPlusStoreType, string|null>(state => state.request.info)
    const dispatch = useDispatch<ThunkDispatch<juniorPlusStoreType, void, AnyAction>>()


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSuccess(e.currentTarget.checked))
    }

    const onClickHandler = () => {
        dispatch(setSuccess())
    }

    return (
        <div>
            <div>
                <p>{error}</p>
                <p>{info}</p>
            </div>
            <input type={'checkbox'} checked={checked} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>Click</button>
        </div>
    )
}