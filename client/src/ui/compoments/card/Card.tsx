import shippingImage from '../../../assets/img/list/shipping.png';
import './Card.scss';

const Card = ({
  title,
  price,
  thumbnail,
  shipping,
  condition
}: {
  title: string;
  condition: string;
  thumbnail: string;
  price: number;
  shipping: {
    free_shipping: boolean,
  };
}) => (
  <section className='card'>
    <img className='card__image' src={thumbnail} alt={title} />
    <div className='card__body'>
      <div className='body__description'>
        <div className='description__main'>
          <h5 className='main__title'>
            $ { price }
            {
              shipping.free_shipping ?
                <img className='title__image' src={shippingImage} alt="Envio gratis" />
              :
              <></>
            }
          </h5>
          <p className='main__location'>Capital Federal</p>
        </div>
        <p className='description__text'>{ title }</p>
        <p className='description__text'>{ condition === 'new' ? 'Nuevo': 'Usado' }</p>
      </div>
    </div>
  </section>
);

export default Card;