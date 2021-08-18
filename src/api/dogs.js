import axios from 'axios'

export const fetchDogs = async (breed) => { // TODO: move this to api/dogs.js
  return axios.get(`https://dog.ceo/api/breed/${breed}/images`).then(response => response.data.message)
}