import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phone = () => {

    const [phones,setPhones]=useState([])

    useEffect(()=>{
        axios.get( `https://openapi.programming-hero.com/api/phones?search=iphone`)
        .then(data => {
            const loadedData= data.data.data;
            

            const phonesData=loadedData.map(phone=>{
                const parts=phone.slug.split('-')
                const price= parseInt(parts[1])
                const phoneInfo={
                    name:phone.phone_name,
                    price:price
                }
                return phoneInfo
            })
            
            setPhones(phonesData)
        })
    },[])
    return (
        <div>
            <BarChart height={500} width={1000} data={phones}>
            <Bar dataKey="price" fill='#8884d8'></Bar>
            <XAxis dataKey="name" />
            <YAxis></YAxis>
            </BarChart>
            
            
        </div>
    );
};

export default Phone;