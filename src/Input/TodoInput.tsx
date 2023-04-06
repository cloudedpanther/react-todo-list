import { RiChatNewLine } from 'react-icons/ri'
import { ChangeEvent, FormEvent } from 'react'
import styles from './TodoInput.module.css'
import { useInputDispatch, useInputState, useTodoDispatch } from '../Todo/TodoProvider'

export default function TodoInput() {
    const inputState = useInputState()
    const inputDispatch = useInputDispatch()
    const todoDispatch = useTodoDispatch()

    const { text } = inputState

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        inputDispatch({
            type: 'change',
            payload: e.target.value,
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!text) {
            return
        }

        todoDispatch({
            type: 'add',
            payload: {
                text,
            },
        })

        inputDispatch({
            type: 'clear',
        })
    }

    return (
        <section className={styles.container}>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="해야 할 Todo"
                    value={text}
                    onChange={handleInputChange}
                />
                <button className={styles.enter} type="submit">
                    <RiChatNewLine />
                </button>
            </form>
        </section>
    )
}
