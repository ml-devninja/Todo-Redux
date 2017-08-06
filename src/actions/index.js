export const addTodo = text => {
  return {
    type: 'ADD_NEW',
    key: Date.now(),
    text
  }
}

export const visibilityFilter = filter => {
  return {
    type: 'VISIBILITY_FILTER',
    filter
  }
}

export const changeStatus = id => {
  return {
    type: 'CHANGE_STATUS',
    id
  }
}

export const changeText = (id, text) => {
  return {
    type: 'CHANGE_TEXT',
    id,
    text
  }
}

export const deleteItem = id => {
  return{
    type: 'DELETE_ITEM',
    id
  }
}
