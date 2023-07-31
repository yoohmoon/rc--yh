import React from 'react';
import Main from './pages/Main';

const App = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

export default App;

/* 
import React, { useState } from 'react';
import './App.css';
import Store from './ts_preview/Store';
import { Address, Restaurant } from './model/restaurant';
import BestMenu from './ts_preview/BestMenu';


let data: Restaurant = {
  name: '식당',
  category: 'western',
  address: {
    city: 'Seoul',
    detail: 'Somewhere',
    zipcode: 12345,
  },
  menu: [
    { name: 'rose pasta', price: 2000, category: 'PASTA' },
    { name: 'garlic steak', price: 3000, category: 'STEAK' },
  ],
};

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };

  const showBestMenu = (name: string) => {
    return name;
  };

  return (
    <div className='App'>
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu name='pizza' category='PIZZA' showBestMenu={showBestMenu} />
    </div>
  );
};
 */
