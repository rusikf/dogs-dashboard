import React from 'react';
import { Button } from 'antd';
import doggoImage from '../images/doggo.jpg';
import '../stylesheets/app.css';

function App() {
  return (
    <div className="app">
      <h1>Doggo Search</h1>
      <p>All great things have small beginnings.</p>
      <img src={doggoImage} width="600" alt="" />
      <p>
        Be sure to take advantage of <a href="https://ant.design/components/button/">Ant Design's components</a>:
      </p>
      <Button type="primary">Example Button</Button>
    </div>
  );
}

export default App;
