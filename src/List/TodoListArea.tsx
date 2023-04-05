import { ReactNode } from 'react'

interface TodoListArea {
    children: ReactNode
    todoCount: number
}

export default function TodoListArea({ children, todoCount }: TodoListArea) {
    return <>{todoCount > 0 && children}</>
}
