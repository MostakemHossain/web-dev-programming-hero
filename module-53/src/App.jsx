import React from 'react';
import Dashboard from './component/Dashboard/Dashboard.jsx';
import Navber from './component/Navber/Navber.jsx';
import Phone from './component/Phone/Phone.jsx';
import PriceList from './component/PriceList/PriceList.jsx';
import Recharts from './component/Recharts/Recharts.jsx';

const App = () => {
 
  return (
    <div>
      <Navber></Navber>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <Phone></Phone>
      <Recharts></Recharts>
      
    </div>
  );
};

export default App;