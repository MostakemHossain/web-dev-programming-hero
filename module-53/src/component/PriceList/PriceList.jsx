import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices,setPrices]=useState([])

    useEffect(()=>{
        fetch('price.json')
        .then(res => res.json())
        .then(data => setPrices(data));
    },[])
    return (
        <div className='mx-12'>
            <h2 className='text-5xl text-center bg-purple-300 text-purple-950 p-4 font-bold'>Affortable Price List</h2>

            <div className='grid md:grid-cols-3 gap-3'>
                {
                    prices.map(price => <PriceCard
                    key={price.id}
                    price={price}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;