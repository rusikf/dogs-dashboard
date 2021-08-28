const initialState = {
  allDogs: [], // need to save original dogs array for the left menu filter
  dogs: [], // dogs, which we currently display. Limited to search query and left menu filter
  page: 1
}
const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ALL_DOGS':
      return { ...state, allDogs: action.payload } // update dogs on query input change
    case 'UPDATE_DOGS':
      return { ...state, dogs: action.payload } // update dogs from left menu filter
    case 'UPDATE_PAGE':
      return { ...state, page: action.payload }
    default:
      return state
  }
}

export default dogsReducer
