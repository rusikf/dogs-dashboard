import React, { useEffect } from 'react'
import { Button, Select, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { shuffleArray, sampleArrayElement } from '../utils';
import { fetchDogs } from '../api/dogs';
const { Option } = Select;

const PER_PAGE_LIMIT = 12

export default function BreedFilter() {
  const allBreeds = useSelector(state => state.breed.allBreeds)
  const dispatch = useDispatch()

  useEffect(() => {
    const randomBreed = sampleArrayElement(allBreeds)
    handleChange([randomBreed])
    dispatch({ type: 'UPDATE_FILTERED_BREEDS', payload: [] })
  }, [])

  const fetchBreeds = async (values) => {
    let dogs = []

    await values.reduce(async (promise, breed) => {
      await promise;
      const collection = await fetchDogs(breed)
      dogs = dogs.concat(collection)

    }, Promise.resolve());

    return dogs
  }

  const handleChange = async (values) => {
    dispatch({ type: 'UPDATE_FILTERED_BREEDS', payload: values })

    let dogs = await fetchBreeds(values)
    const payload = shuffleArray(dogs).slice(0, PER_PAGE_LIMIT)
    dispatch({ type: 'UPDATE_DOGS', payload })
  }

  const filterOptions = []

  allBreeds.forEach((breed) => {
    filterOptions.push(<Option key={breed}>{breed}</Option>)
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