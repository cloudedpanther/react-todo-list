import styles from './TodoItem.module.css'
import { BsCheckCircle } from 'react-icons/bs'
import { IoIosRemoveCircleOutline } from 'react-icons/io'
import { TodoType } from '../Todo/todoReducer'
import { useTodoDispatch } from '../Todo/TodoProvider'

interface TodoItemProps {
    todo: TodoType
}

export default function TodoItem({ todo }: TodoItemProps) {
    const todoDispatch = useTodoDispatch()

    const { id, text, isChecked } = todo

    const handleToggleClick = () => {
        todoDispatch({
            type: 'checked',
            payload: {
                id,
            },
        })
    }

    const handleRemoveClick = () => {
        todoDispatch({
            type: 'remove',
            payload: {
                id,
            },
        })
    }

    return (
        <li className={styles.container}>
            <BsCheckCircle
                className={[
                    styles.checkCircleIcon,
                    isChecked ? styles.checkedCircleIcon : styles.unCheckedCircleIcon,
                ].join(' ')}
                onClick={handleToggleClick}
            />
            <span className={isChecked ? styles.lineThrough : ''}>{text}</span>
            <IoIosRemoveCircleOutline
                className={styles.removeCircleIcon}
                onClick={handleRemoveClick}
            />
        </li>
    )
}
