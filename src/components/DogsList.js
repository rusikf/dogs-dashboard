import React from 'react';
import { Row, Col, Image } from 'antd';
import { useSelector } from 'react-redux';

export default function DogsList() {
  const dogs = useSelector(state => state.dogs.dogs)

  const DogsImages = dogs.map(url => {
    return (<Col key={url} span={8}>
      <Image
        src={url}
        className='p-10'
      />
    </Col>)
  })

  return (
    <Row className='mt-10'>
      { DogsImages }
    </Row>
  )
}
