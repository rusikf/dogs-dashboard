import React from 'react';
import { PageHeader } from 'antd';
import { Menu } from 'antd';

export default function Header() {
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="Doggo Search"
      backIcon={false}
      extra={[
        <Menu theme="light" mode="horizontal">
          <Menu.Item key="1">Search</Menu.Item>
          <Menu.Item key="2">My Saved Dogs</Menu.Item>
        </Menu>
      ]}
    />
  )
}

