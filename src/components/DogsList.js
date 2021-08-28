import React from 'react';
import { Row, Col, Image, Tag } from 'antd';
import { useSelector } from 'react-redux';
import { PER_PAGE_LIMIT } from '../constants';

export default function DogsList() {
  const page = useSelector(state => state.dogs.page)
  const dogs = useSelector(state => state.dogs.dogs)

  const startIndex = page === 1 ? 0 : page * PER_PAGE_LIMIT
  const collection = dogs.slice(startIndex).slice(0, PER_PAGE_LIMIT)


  const breedsTree = useSelector(state => state.breed.breedsTree)

  const DogsImages = collection.map(({ url, breed }) => {
    const subreeds = breedsTree[breed]
    return (<Col key={url} span={8}>
      <Image
        src={url}
        className='p-10'
      />

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Tag>{ breed }</Tag>
        { subreeds.length > 0 && subreeds.map(title => <Tag key={title}>{title}</Tag>) }
      </div>
    </Col>)
  })

  return (
    <Row className='mt-10'>
      { DogsImages }
    </Row>
  )
}
