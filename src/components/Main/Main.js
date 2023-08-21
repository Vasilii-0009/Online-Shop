import './Main.scss'
import React from 'react';
import ArrJson from "../ArrJson/Arr.json"
import Card from './Card/Card';

export default function Main() {
   return (
      <main className='main'>
         <div className='main__card card'>
            {ArrJson.map((items) => {
               return (
                  <Card key={items.id} items={items} />
               )
            })}
         </div>
      </main>
   )
}
