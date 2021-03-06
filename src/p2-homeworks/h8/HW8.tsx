import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type userType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<userType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<userType>>(initialPeople)

    const finalPeople = people.map((p: userType) => (
        <div key={p._id} className={s.arrayItem}>
            <span>{p.name}</span><span>{p.age}</span>
        </div>
    ))

    const sortUp = () => {
        debugger
        setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    }
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const sortCheckAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))
    return (
        <div>
            <hr/>
            homeworks 8

            <div className={s.wrapper}>
            <div className={s.array}>
                {finalPeople}
            </div>

            <div className={s.buttons}>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={sortCheckAge}>check 18</SuperButton>
            </div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
