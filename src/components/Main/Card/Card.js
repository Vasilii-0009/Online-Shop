import './Card.scss'
import React from 'react'

export default function Card(props) {
   const propsCard = props.items
   return (
      <div className='card__item'>
         <div className='card__img'>
            <img src={propsCard.img} />
         </div>
         <h3 className='card__title'>{propsCard.name}</h3>
         <p className='card__price'>${propsCard.price}</p>
         <button className='card__btn' type='button'>{propsCard.btn}</button>
      </div>
   )
}
