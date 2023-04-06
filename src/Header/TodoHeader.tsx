import { useTodoState } from '../Todo/TodoProvider'
import styles from './TodoHeader.module.css'

export default function TodoHeader() {
    const todoState = useTodoState()
    const todoCount = todoState.todos.filter((todo) => !todo.isChecked).length

    return (
        <header>
            <h1 className={styles.headerTitle}>
                <mark className={styles.todoCount}>{todoCount}</mark>
                개의 할 일
            </h1>
        </header>
    )
}
