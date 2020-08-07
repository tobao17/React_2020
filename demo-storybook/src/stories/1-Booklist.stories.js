import React from 'react';
import Booklist from '../components/Booklist.js'
export const Card = () => (
  <Booklist 
  description="tôi thấy sách siêu hay"
  imageBookurl="http://res.cloudinary.com/dncg2zipn/image/upload/v1594295320/ygudluf07ja3sdo6oooa.jpg"
  title="sách hay"
     >
  </Booklist>
);
export default {
  title: 'CardBook',
  component: Booklist
};
