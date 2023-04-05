import styles from './TodoListTools.module.css'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'
import { CgRadioCheck } from 'react-icons/cg'

interface TodoListToolsProps {
    isAllChecked: Boolean
    onToggleAllClick: () => void
    onRemoveAllClick: () => void
}

export default function TodoListTools({
    isAllChecked,
    onToggleAllClick,
    onRemoveAllClick,
}: TodoListToolsProps) {
    const handleToggleAllClick = () => {
        onToggleAllClick()
    }

    const handleRemoveAllClick = () => {
        onRemoveAllClick()
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