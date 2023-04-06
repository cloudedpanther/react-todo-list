import styles from './TodoListTools.module.css'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'
import { CgRadioCheck } from 'react-icons/cg'
import { useTodoDispatch, useTodoState } from '../Todo/TodoProvider'

export default function TodoListTools() {
    const todoState = useTodoState()
    const todoDispatch = useTodoDispatch()

    const isAllChecked = todoState.todos.every((todo) => todo.isChecked)

    const handleToggleAllClick = () => {
        todoDispatch({
            type: 'allChecked',
            payload: {
                isAllChecked,
            },
        })
    }

    const handleRemoveAllClick = () => {
        todoDispatch({
            type: 'allRemove',
        })
    }

    return (
        <section className={styles.container}>
            <button className={styles.button} onClick={handleToggleAllClick}>
                {isAllChecked ? (
                    <>
                        <CgRadioCheck className={styles.checkAllIcon} />
                        전체 해제
                    </>
                ) : (
                    <>
                        {' '}
                        <IoCheckmarkDoneCircleOutline className={styles.checkAllIcon} />
                        전체 완료
                    </>
                )}
            </button>
            <button
                className={[styles.button, styles.removeAllButton].join(' ')}
                onClick={handleRemoveAllClick}
            >
                <MdDelete className={styles.removeAllIcon} />
                전체 삭제
            </button>
        </section>
    )
}
