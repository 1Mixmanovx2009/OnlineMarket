import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import Header from '../components/Header';
import { LoadingOutlined } from '@ant-design/icons';
import { Empty } from 'antd';

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api.escuelajs.co/api/v1/products/?title=${searchValue}&categoryId=${categoryId || ""}&offset=0&limit=27`)
      .then(res => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, [searchValue, categoryId]); 

  return (
    <>
      <Header 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        setCategoryId={setCategoryId} 
      />
      <ul className='flex justify-between px-[20px] flex-wrap gap-5 pt-[100px]'>
        {isLoading 
          ? <li><LoadingOutlined className='mx-auto mt-[60px]' style={{ fontSize: '100px', color: 'grey' }} /></li> 
          : (products.length > 0 ? products.map(item => <ProductItem key={item.id} item={item} />)
            : <Empty className='mx-auto mt-[60px]'/>)}
      </ul>
    </>
  );
}

export default Home;
