const visibility = (state = 'ALL', action) => {
  switch (action.type) {
    case 'VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibility
