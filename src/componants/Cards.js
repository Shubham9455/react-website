import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import { Objects } from './Objects';



function Cards() {

  
  return (
    <div className='cards'>
      <h1>See Some Top Movies</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {Objects.map((item) => {
              return (
                <CardItem
                  src={item.image}
                  text={item.title}
                />
              );
            },)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
