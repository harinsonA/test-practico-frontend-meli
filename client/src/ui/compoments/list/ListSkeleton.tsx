import './ListSkeleton.scss';

const ListSkeleton = () => <section className="list-skeleton">
    <div className="list-skeleton__card">
      <div className="card__image"></div>
      <div className='card__body'>
        <div className="card__line"></div>
        <div className="card__line"></div>
        <div className="card__line"></div>
      </div>
    </div>
    <div className="list-skeleton__card">
      <div className="card__image"></div>
      <div className='card__body'>
        <div className="card__line"></div>
        <div className="card__line"></div>
        <div className="card__line"></div>
      </div>
    </div>
    <div className="list-skeleton__card">
      <div className="card__image"></div>
      <div className='card__body'>
        <div className="card__line"></div>
        <div className="card__line"></div>
        <div className="card__line"></div>
      </div>
    </div>
  </section>


export default ListSkeleton;