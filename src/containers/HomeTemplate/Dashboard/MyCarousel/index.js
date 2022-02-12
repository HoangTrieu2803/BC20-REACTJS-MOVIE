import React, {useEffect} from 'react'
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { carouselAction } from './modules/actions';
const contentStyle = {
  height: '600px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
};
export default function MyCarousel(props) {
  const {arrImg} = useSelector(state=>state.carouselReducer);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(carouselAction);
  }, []);

  const renderImg = () =>{
    return arrImg.map((item,index)=>{
      return <div key={index}>
      <div style={{...contentStyle, backgroundImage: `url(${item.hinhAnh})`}}>
      </div>
    </div>
    })
  }
  return (
    <div><Carousel autoplay>
      {renderImg()}
    </Carousel></div>
  )
}
