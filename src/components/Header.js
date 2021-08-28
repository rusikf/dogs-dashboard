import React from 'react';
import { PageHeader } from 'antd';

export default function Header() {
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="Doggo Search"
      backIcon={false}
    />
  )
}

