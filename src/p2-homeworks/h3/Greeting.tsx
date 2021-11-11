import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (name: string) => void
    addUser: (name: string) => void
    error: string
    totalUsers: number
    setError: (error: string) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setError} // деструктуризация пропсов
) => {


    const activeButton = name ? false : true

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value === ' ') {
            setError('no spaces can be entered')
        } else {
            setNameCallback(e.currentTarget.value)
            setError('')
        }


    }

    const onKeyPressHendler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name !== '') {
            addUser(name)
            setNameCallback('')
        } else if (e.key === 'Enter' && name === '') {
            setError('write a name')
        }
    }

    const onClickAddUser = () => {
        addUser(name)
        setNameCallback('')

    }

    return (
        <div className={s.item}>
            <div>
                <SuperInputText
                    value={name}
                    onChange={onChangeHandler}
                    className={`${s.input}`}
                    error={error}
                    onKeyPress={onKeyPressHendler}
                />
            </div>
            <div className={s.button_container}>
                <SuperButton onClick={onClickAddUser} disabled={activeButton}>add</SuperButton>

                <span>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
