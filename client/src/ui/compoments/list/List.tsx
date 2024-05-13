import React from 'react';
import { Link } from "react-router-dom";
import { ItemList, Item } from '../../../lib/definitions';

import Card from '../card/Card';
import './List.scss';



const List: React.FC<ItemList> = ({items}) => {
  return (
    <section className="list">
      { 
        items.map((item: Item) =>
          <Link
            key={item.id}
            to={`/items/${item.id}`}
            className='container__card'
          >
            <Card {...item} />
          </Link>
        )
      }
    </section>
  )
}


export default List;