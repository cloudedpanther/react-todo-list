import { RiChatNewLine } from 'react-icons/ri'
import { ChangeEvent, FormEvent } from 'react'
import styles from './TodoInput.module.css'

interface TodoInputProps {
    text: string
    onTextChange: (text: string) => void
    onSubmit: () => void
}

export default function TodoInput({ text, onTextChange, onSubmit }: TodoInputProps) {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onTextChange(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (text === '') {
            return
        }

        onSubmit()
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
