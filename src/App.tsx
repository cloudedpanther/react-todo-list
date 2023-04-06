import './App.css'
import Divider from './Divider/Divider'
import TodoHeader from './Header/TodoHeader'
import TodoInput from './Input/TodoInput'
import TodoList from './List/TodoList'
import TodoListTools from './Tools/TodoListTools'
import TodoListArea from './List/TodoListArea'
import TodoProvider from './Todo/TodoProvider'

function App() {
    return (
        <div className="App">
            <TodoProvider>
                <TodoHeader />
                <TodoInput />
                <TodoListArea>
                    <TodoListTools />
                    <Divider />
                    <TodoList />
                </TodoListArea>
            </TodoProvider>
        </div>
    )
}

export default App
