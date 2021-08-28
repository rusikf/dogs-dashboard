import React from 'react';
import '../stylesheets/app.css';

import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

import { Provider } from 'react-redux';

import Header from './Header'
import LeftMenu from './LeftMenu'
import BreedFilter from './BreedFilter'
import DogsList from './DogsList'
import DogsPagination from './DogsPagination';

import { Layout, Typography } from 'antd';
const { Title } = Typography;

function App() {
  let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return (
    <Provider store={store}>
      <div className="app">
        <Layout>
          <Header />
          <Layout>
            <LeftMenu />
            <Layout style={{ padding: '0 24px 24px' }}>
            <Title level={3} className='mt-10'>Search</Title>
              <BreedFilter />
              <DogsList />
              <DogsPagination />
            </Layout>
          </Layout>
        </Layout>
      </div>
    </Provider>
  );
}

export default App;
