import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)


    const updateTime = () => {
        let date = new Date();
        setDate(date)
    }

    const stop = () => {
        clearInterval(timerId)
        setTimerId(0)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            updateTime()
        }, 1000)
        updateTime()
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    let day = '01'
    let month = '01'
    let year = '1999'

    if (date) {
        day = date.getDay().toString()
        month = date.getMonth().toString()
        year = date.getFullYear().toString()
    }


    let hours = date?.getHours();
    let newHours: string = '00'
    if (hours) {
        newHours = hours.toString()
        if (hours < 10) newHours = '0' + newHours
    }


    let minutes = '00'
    let seconds = '00'
    if (date) {
        minutes = date.getMinutes().toString()
        seconds = date.getSeconds().toString()
    }
    let stringTime = `${newHours}:${minutes}:${seconds}`
    let stringDate = `${day}.${month}.${year}`


    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
