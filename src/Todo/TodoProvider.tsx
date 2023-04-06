import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react'
import { TodoInputActionType, todoInputReducer, TodoInputStateType } from './todoInputReducer'
import { TodoActionType, todoReducer, TodoStateType } from './todoReducer'
import { loadTodos } from './todoStorage'

interface TodoProviderProps {
    children: ReactNode
}

const initialInputState = {
    text: '',
}

const initialTodoState = {
    todos: loadTodos(),
}

const TodoStateContext = createContext<TodoStateType | null>(null)
const TodoDispatchContext = createContext<Dispatch<TodoActionType> | null>(null)
const InputStateContext = createContext<TodoInputStateType | null>(null)
const InputDispatchContext = createContext<Dispatch<TodoInputActionType> | null>(null)

export default function TodoProvider({ children }: TodoProviderProps) {
    const [todoState, todoDispatch] = useReducer(todoReducer, initialTodoState)
    const [inputState, inputDispatch] = useReducer(todoInputReducer, initialInputState)

    return (
        <TodoStateContext.Provider value={todoState}>
            <TodoDispatchContext.Provider value={todoDispatch}>
                <InputStateContext.Provider value={inputState}>
                    <InputDispatchContext.Provider value={inputDispatch}>
                        {children}
                    </InputDispatchContext.Provider>
                </InputStateContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export const useTodoState = () => {
    const value = useContext(TodoStateContext)

    if (!value) {
        throw new Error('cannot find useTodoState')
    }

    return value
}

export const useTodoDispatch = () => {
    const value = useContext(TodoDispatchContext)

    if (!value) {
        throw new Error('cannot find useTodoDispatch')
    }

    return value
}

export const useInputState = () => {
    const value = useContext(InputStateContext)

    if (!value) {
        throw new Error('cannot find useInputState')
    }

    return value
}

export const useInputDispatch = () => {
    const value = useContext(InputDispatchContext)

    if (!value) {
        throw new Error('cannot find useInputDispatch')
    }

    return value
}
