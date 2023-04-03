import React from 'react';
import Feature from './Feature';

const PriceCard = ({price}) => {
    
    return (
        <div className='bg-indigo-400 mt-5 p-4 rounded-2xl flex flex-col'>
            <h2 className=' text-center'>
                <span className='text-5xl font-extrabold text-purple-700'>{price.price}</span>
                <span className='text-2xl font-bold text-white'>/mon</span>
            </h2>
            
            <h2 className='text-2xl text-bold text-center'>{price.type}</h2>
            <p className='underline text-white font-bold'>Features</p>

            {
                price.features.map((feature,idx) => <Feature
                key={idx}
                feature={feature}
                ></Feature>)
            }
            <button className='w-full mt-auto bg-green-500 font-bold text-3xl p-2 text-white rounded-xl'>Buy Now</button>
        </div>
    );
};

export default PriceCard;