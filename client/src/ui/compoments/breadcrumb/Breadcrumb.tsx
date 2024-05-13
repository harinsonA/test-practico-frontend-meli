import React from 'react';
import { Categories } from '../../../lib/definitions';
import './Breadcrumb.scss';


const Breadcrumb: React.FC<Categories> = ({categories}) => {
  return <section className="breadcrumb">
    <p className='breadcrumb__text'>
      {
        categories.map((category, index, nodeList) => {
          if (index === nodeList.length - 1) {
            return <b key={index} className='text'>{ category }</b>;
          }
          return <span key={index} className='text'>{ category }</span>;
        })
      }
    </p>
  </section>
}

export default Breadcrumb;