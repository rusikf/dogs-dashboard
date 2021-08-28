import axios from 'axios'
const HOST = 'https://dog.ceo/api'

export const fetchDogs = async (breed) => {
  return axios.get(`${HOST}/breed/${breed}/images`).then(response => response.data.message)
}

export const fetchBreeds = async (breed) => {
  return axios.get(`${HOST}/breeds/list/all`).then(response => response.data.message)
}
