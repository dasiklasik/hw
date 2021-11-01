import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (name: string) => void // need to fix any
    addUser: (name: string) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    setError: (error: string) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setError} // деструктуризация пропсов
) => {



    const inputClass = error ? s.right : s.error // need to fix with (?:)

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
            <input value={name}
                   onChange={onChangeHandler}
                   className={`${inputClass} ${s.input}`}
                   onKeyPress={onKeyPressHendler}/>
            <button onClick={onClickAddUser} disabled={activeButton} className={s.button}>add</button>
            <span>{totalUsers}</span>
            <div className={s.error_message}>{error}</div>
        </div>
    )
}

export default Greeting
