import './CardSkeleton.scss';


const CardSkeleton = () => (
  <section className='card-skeleton-container'>
    <div className='card-skeleton'>
      <div className="card-skeleton__image skeleton-box"></div>
      <div className='card-skeleton__body'>
        <div className='body__text skeleton-box'></div>
        <div className='body__text body__text--large skeleton-box'></div>
        <div className='body__text body__text--media skeleton-box'></div>
        <div className='body__text body__text--small skeleton-box'></div>
        <div className='body__text body__text--large skeleton-box'></div>
        <div className='body__text body__text--media skeleton-box'></div>
        <div className='body__text body__text--small skeleton-box'></div>
      </div>
    </div>
  </section>
);

export default CardSkeleton;