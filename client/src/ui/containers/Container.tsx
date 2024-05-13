import React from 'react';
import { Children } from '../../lib/definitions';
import './Container.scss';

const Container: React.FC<Children> = (props) => (
  <section className='container'>
    <section className='container__components'>
      { props.children }
    </section>
  </section>
);

export default Container;