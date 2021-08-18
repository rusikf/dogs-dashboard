const initialState = {
  dogs: []
}
const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DOGS':
      return { ...state, dogs: action.payload }
    default:
      return state
  }
}

export default dogsReducer
