import React from 'react'
import { Button, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { PER_PAGE_LIMIT } from '../constants';

export default function DogsPagination() {
  const dispatch = useDispatch()
  const page = useSelector(state => state.dogs.page)
  const dogs = useSelector(state => state.dogs.dogs)

  const goToNextPage = () => {
    dispatch({ type: 'UPDATE_PAGE', payload: page + 1 })
  }

  const goToPrevPage = () => {
    dispatch({ type: 'UPDATE_PAGE', payload: page -1 })
  }

  const startIndex = (page + 1) * PER_PAGE_LIMIT
  const collection = dogs.slice(startIndex)

  const nextPageExists = collection.length > 0

  return (
    <Row className='mt-5 pagination--header'>
      { nextPageExists && <Button type='primary' onClick={() => goToNextPage()}>Next</Button> }
      { page > 1 && <Button type='dashed' onClick={() => goToPrevPage()}>Prev</Button> }

      { nextPageExists && page > 1 && <div className="ml-2">Current page: {page}</div> }
    </Row>
  )
}
