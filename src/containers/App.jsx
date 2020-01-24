import React from 'react';

import UserInfo from '../components/UserInfo'
import ServicesInfo from '../components/ServicesInfo'

const App = () => {
  return (
    <main className='app'>
      <div className='wrapper'>
        <UserInfo />
        <ServicesInfo />
      </div>
    </main>
  )
}

export default App;
