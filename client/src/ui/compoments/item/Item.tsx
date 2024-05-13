import './Item.scss';

const Item = ({
  title,
  condition,
  thumbnail,
  price,
  plain_text,
}: {
  title: string;
  condition: string;
  thumbnail: string;
  price: number;
  plain_text: string;
}) => {
  return (
    <section className="item">
      <section className="item__detail">
        <img className="detail__image" src={ thumbnail } alt={ title } />
        <div className="detail__desciption">
          <h5 className='description__title'>Descripción del producto</h5>
          <p className='description__text'>{ plain_text }</p>
        </div>
      </section>
      <section className="item__info">
        <span className='info__sales'>{ condition === 'new' ? 'Nuevo': 'Usado'} - 234 vendidos</span>
        <h4 className="info__name">{ title }</h4>
        <p className="info__price">
          $ { price }
          <span className="price__decimal">00</span>
        </p>
        <button type="button" className="info__buy-button">
          Comprar
        </button>
      </section>
    </section>
  )
}

export default Item;