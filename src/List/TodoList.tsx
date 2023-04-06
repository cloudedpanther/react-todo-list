import TodoItem from '../ListItem/TodoItem'
import { useTodoState } from '../Todo/TodoProvider'
import styles from './TodoList.module.css'

export default function TodoList() {
    const { todos } = useTodoState()

    return (
        <section>
            <ol className={styles.olContainer}>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ol>
        </section>
    )
}
