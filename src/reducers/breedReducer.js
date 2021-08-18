const initialState = {
  // TODO: fetch breeds from API
  // TODO: limit breeds in select input to 5 https://stackoverflow.com/questions/60325757/select-limit-number-of-selected-options

  allBreeds: ['boxer', 'african', 'akita', 'bulldog'],
  filteredBreeds: []
}
const breedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FILTERED_BREEDS':
      return { ...state, filteredBreeds: action.payload }
    default:
      return state
  }
}

export default breedReducer