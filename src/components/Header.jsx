import { Input, Select } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Header({ searchValue, setSearchValue, setCategoryId }) { 
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        axios.get("https://api.escuelajs.co/api/v1/categories").then(res => {
            const categories = res.data.map(item => ({
                value: item.id,
                label: item.name
            }));
            setCategoryData(categories);
        });
    }, []);

    return (
        <div className='flex w-full justify-between items-center px-6 bg-white fixed z-10 shadow-lg top-0 border-b border-gray-300'>
            <h1 className='text-2xl font-bold py-3 text-gray-800'>Home</h1>
            <div className='flex items-center gap-4'>
                <Input.Search 
                    value={searchValue} 
                    onChange={(e) => setSearchValue(e.target.value)} 
                    allowClear 
                    className='w-[350px] rounded-lg border border-gray-300 transition duration-300 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500' 
                    placeholder='Search products' 
                    enterButton
                />
                <Select
                allowClear
                    showSearch
                    placeholder="Choose category"
                    onChange={setCategoryId} 
                    className='w-[200px] rounded-lg border border-gray-300 transition duration-300 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    options={categoryData}
                />
            </div>
        </div>
    );
}

export default Header;
