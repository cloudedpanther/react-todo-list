import { useReducer } from 'react'
import './App.css'
import Divider from './Divider/Divider'
import TodoHeader from './Header/TodoHeader'
import TodoInput from './Input/TodoInput'
import TodoList from './List/TodoList'
import TodoListTools from './Tools/TodoListTools'
import TodoListArea from './List/TodoListArea'
import { todoInputReducer } from './Todo/todoInputReducer'
import { todoReducer } from './Todo/todoReducer'

const initialInputState = {
    text: '',
}

const initialTodoState = {
    todos: [],
}

function App() {
    const [inputState, inputDispatch] = useReducer(todoInputReducer, initialInputState)

    const [todoState, todoDispatch] = useReducer(todoReducer, initialTodoState)

    const handleTextChange = (text: string) => {
        inputDispatch({
            type: 'change',
            payload: text,
        })
    }

    const handleSubmit = () => {
        if (!inputState.text) {
            return
        }

        todoDispatch({
            type: 'add',
            payload: {
                text: inputState.text,
            },
        })

        inputDispatch({
            type: 'clear',
        })
    }

    const handleToggleClick = (id: number) => {
        todoDispatch({
            type: 'checked',
            payload: {
                id,
            },
        })
    }

    const handleRemoveClick = (id: number) => {
        todoDispatch({
            type: 'remove',
            payload: {
                id,
            },
        })
    }

    const isTodoAllChecked = () => {
        return todoState.todos.every((todo) => todo.isChecked)
    }

    const handleToggleAllClick = () => {
        const isAllChecked = isTodoAllChecked()

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
        <div className="App">
            <TodoHeader todoCount={todoState.todos.filter((todo) => !todo.isChecked).length} />
            <TodoInput
                text={inputState.text}
                onTextChange={handleTextChange}
                onSubmit={handleSubmit}
            />
            <TodoListArea todoCount={todoState.todos.length}>
                <TodoListTools
                    isAllChecked={isTodoAllChecked()}
                    onToggleAllClick={handleToggleAllClick}
                    onRemoveAllClick={handleRemoveAllClick}
                />
                <Divider />
                <TodoList
                    todos={todoState.todos}
                    onToggleClick={handleToggleClick}
                    onRemoveClick={handleRemoveClick}
                />
            </TodoListArea>
        </div>
    )
}

export default App
