const initialState = {
  allBreeds: [],
  searchedBreeds: [],
  breedsTree: {},
  filteredBreed: 'all'
}

const updateBreeds = ({ state, action, key }) => {
  return { ...state, [key]: action.payload }
}

const breedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_BREEDS_TREE':
      return updateBreeds({ state, action, key: 'breedsTree' })
    case 'UPDATE_ALL_BREEDS':
      return updateBreeds({ state, action, key: 'allBreeds' })
    case 'UPDATE_SEARCHED_BREEDS':
      return updateBreeds({ state, action, key: 'searchedBreeds' })
    case 'UPDATE_FILTERED_BREED':
      return updateBreeds({ state, action, key: 'filteredBreed' })
    default:
      return state
  }
}

export default breedReducer