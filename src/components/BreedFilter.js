import React, { useEffect } from 'react'
import { Button, Select, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { shuffleArray, sampleArrayElement } from '../utils';
import { fetchDogs, fetchBreeds } from '../api/dogs';
import { MAX_BREEDS_TO_SELECT } from '../constants';

const { Option } = Select;

export default function BreedFilter() {
  const allBreeds = useSelector(state => state.breed.allBreeds)
  const searchedBreeds = useSelector(state => state.breed.searchedBreeds)

  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchBreedsFromApi() {
      const breedsFromAPI = await fetchBreeds()

      const breedsWithoutChilds = Object.keys(breedsFromAPI)
      dispatch({ type: 'UPDATE_ALL_BREEDS', payload: breedsWithoutChilds })
      dispatch({ type: 'UPDATE_BREEDS_TREE', payload: breedsFromAPI })

      const randomBreed = sampleArrayElement(breedsWithoutChilds)
      handleChange([randomBreed])
      dispatch({ type: 'UPDATE_SEARCHED_BREEDS', payload: [] })
    }

    fetchBreedsFromApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchAndStoreDogs = async (values) => {
    let dogs = []

    await values.reduce(async (promise, breed) => {
      await promise;
      const collection = await fetchDogs(breed)

      const collectionWithBreed = collection.map(dogUrl => {
        return {
          url: dogUrl,
          breed: breed
        }
      })

      dogs = dogs.concat(collectionWithBreed)

    }, Promise.resolve());

    return dogs
  }

  const handleChange = async (values) => {
    dispatch({ type: 'UPDATE_SEARCHED_BREEDS', payload: values })

    let dogs = await fetchAndStoreDogs(values)
    const payload = shuffleArray(dogs)
    dispatch({ type: 'UPDATE_ALL_DOGS', payload })
    dispatch({ type: 'UPDATE_DOGS', payload })
  }

  const filterOptions = []

  allBreeds.forEach((breed) => {
    let disabled
    if (searchedBreeds.length === MAX_BREEDS_TO_SELECT) {
      disabled = searchedBreeds.includes(breed) ? false : true
    } else {
      disabled = false
    }

    filterOptions.push(<Option key={breed} disabled={disabled}>{breed}</Option>)
  })

  return (
    <Row>
      <Col span={6}>
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Please select"
          onChange={handleChange}
        >
          {filterOptions}
        </Select>
      </Col>
      <Col span={2}>
        <Button type="primary" htmlType="submit" className='ml-2'>
          Search
        </Button>
      </Col>
    </Row>
  )
}