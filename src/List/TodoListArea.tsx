import { ReactNode } from 'react'
import { useTodoState } from '../Todo/TodoProvider'

interface TodoListArea {
    children: ReactNode
}

export default function TodoListArea({ children }: TodoListArea) {
    const todoState = useTodoState()
    const todoCount = todoState.todos.length

    return <>{todoCount > 0 && children}</>
}
