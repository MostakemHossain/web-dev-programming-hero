import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
   
    return (
        <div>
            <Header></Header>
            <div>
               {
                navigation.state==='loading'
               }
            </div>
          
           <Outlet></Outlet>
        </div>
    );
};

export default Home;