import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message_wrapper}>
            <img src={props.avatar} alt={'avatar'} className={s.message_avatar}/>
            <div className={s.message}>
                <div className={s.message_content}>
                    <div className={s.message_name}>{props.name}</div>
                    <div className={s.message_text}>{props.message}</div>
                </div>
                <div className={s.message_time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
