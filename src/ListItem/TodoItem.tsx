import styles from './TodoItem.module.css'
import { BsCheckCircle } from 'react-icons/bs'
import { IoIosRemoveCircleOutline } from 'react-icons/io'
import { TodoType } from '../Todo/todoReducer'

interface TodoItemProps {
    todo: TodoType
    onToggleClick: (id: number) => void
    onRemoveClick: (id: number) => void
}

export default function TodoItem({ todo, onToggleClick, onRemoveClick }: TodoItemProps) {
    const { id, text, isChecked } = todo

    const handleToggleClick = () => {
        onToggleClick(id)
    }

    const handleRemoveClick = () => {
        onRemoveClick(id)
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
