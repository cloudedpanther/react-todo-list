import styles from './TodoHeader.module.css'

interface TodoHeaderProps {
    todoCount: number
}

export default function TodoHeader({ todoCount }: TodoHeaderProps) {
    return (
        <header>
            <h1 className={styles.headerTitle}>
                <mark className={styles.todoCount}>{todoCount}</mark>
                개의 할 일
            </h1>
        </header>
    )
}
