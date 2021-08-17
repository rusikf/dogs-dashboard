import React from 'react';
import '../stylesheets/app.css';

import Header from './Header'
import LeftMenu from './LeftMenu'

import { Layout, Button, Select, Row, Col, Typography, Image } from 'antd';
const { Title } = Typography;
const { Option } = Select;

function App() {
  const handleChange = () => {
    console.log('handle Change')
  }

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }
  return (
    <div className="app">
       <Layout>
        <Header />
        <Layout>
          <LeftMenu />
          <Layout style={{ padding: '0 24px 24px' }}>
          <Title level={3} className='mt-10'>Search</Title>
          <Row>
            <Col span={6}>
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Please select"
                onChange={handleChange}
              >
                {children}
              </Select>
            </Col>
            <Col span={2}>
              <Button type="primary" htmlType="submit" className='ml-2'>
                Search
              </Button>
            </Col>
            </Row>

            <Row className='mt-10'>
              <Col span={8}>
              <Image
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                className='p-10'
              />
              </Col>
              <Col span={8}>
              <Image
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                className='p-10'
              />
              </Col>
              <Col span={8}>
              <Image
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                className='p-10'
              />
              </Col>
            </Row>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
