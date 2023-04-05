export type TodoType = {
    id: number
    text: string
    isChecked: Boolean
}

type TodoStateType = {
    todos: TodoType[]
}

type TodoActionType =
    | {
          type: 'add'
          payload: {
              text: string
          }
      }
    | {
          type: 'remove'
          payload: {
              id: number
          }
      }
    | {
          type: 'checked'
          payload: {
              id: number
          }
      }
    | {
          type: 'allChecked'
          payload: {
              isAllChecked: Boolean
          }
      }
    | {
          type: 'allRemove'
      }

export const todoReducer = (state: TodoStateType, action: TodoActionType) => {
    switch (action.type) {
        case 'add':
            return {
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        text: action.payload.text,
                        isChecked: false,
                    },
                ],
            }
        case 'remove':
            return {
                todos: state.todos.filter((todo) => todo.id !== action.payload.id),
            }
        case 'checked':
            return {
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            isChecked: !todo.isChecked,
                        }
                    }

                    return todo
                }),
            }
        case 'allChecked':
            return {
                todos: state.todos.map((todo) => {
                    return {
                        ...todo,
                        isChecked: !action.payload.isAllChecked,
                    }
                }),
            }
        case 'allRemove':
            return {
                todos: [],
            }
    }
}
