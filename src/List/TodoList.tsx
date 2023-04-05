import TodoItem from '../ListItem/TodoItem'
import { TodoType } from '../Todo/todoReducer'
import styles from './TodoList.module.css'

interface TodoListProps {
    todos: TodoType[]
    onToggleClick: (id: number) => void
    onRemoveClick: (id: number) => void
}

export default function TodoList({ todos, onToggleClick, onRemoveClick }: TodoListProps) {
    return (
        <section>
            <ol className={styles.olContainer}>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggleClick={onToggleClick}
                        onRemoveClick={onRemoveClick}
                    />
                ))}
            </ol>
        </section>
    )
}
