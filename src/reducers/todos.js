const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NEW':
      return [
        ...state,
        {
          id: action.key,
          text: action.text,
          completed: false
        }
      ]
    case 'CHANGE_STATUS':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )

    case 'CHANGE_TEXT':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, text: action.text}
          : todo
      )

    case 'DELETE_ITEM':
      return state.filter(todo => todo.id !== action.id)

    default:
      return state
  }
}

export default todos
