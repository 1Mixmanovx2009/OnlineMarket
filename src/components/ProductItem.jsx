import { EllipsisOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react'

function ProductItem({ item }) {
  return (
    <div>
      <li className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-72 mx-auto">
        <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src={item.images[0]}
      />
    }
    actions={[
      <EllipsisOutlined className='!scale-150' key="ellipsis" />,
      <HeartOutlined className='!scale-150' key="ellipsis"/>,
      <ShoppingCartOutlined className='!scale-150' key="ellipsis"/>
    ]}
  >
    <Meta
      avatar={<Avatar src={item.category.image} />}
      title={item.title}
      description={<p className='line-clamp-3'>{item.description}</p>}
    />
  </Card>
      </li>
    </div>
  );
}

export default ProductItem;
