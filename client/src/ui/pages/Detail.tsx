import { useParams } from 'react-router-dom';
import useFetch from '../../lib/hooks/useFetch';

import Errors from '../sections/Errors';
import Container from '../containers/Container';
import Breadcrumb from '../compoments/breadcrumb/Breadcrumb';
import BreadcrumbSkeleton from '../compoments/breadcrumb/BreadcrumbSkeleton';
import Item  from "../compoments/item/Item";
import CardSkeleton from '../compoments/card/CardSkeleton';

const Detail = () => {
  const { id } = useParams();
  const [detail, error] = useFetch(`/${id}`);

  if (error) {
    return <Errors />
  }

  return <Container>
    {(detail && detail.item) ?
      (
        <>
          <Breadcrumb categories={detail.categories} />
          <Item {...detail.item} />
        </>
      )
      : (
        <>
          <BreadcrumbSkeleton />
          <CardSkeleton />
        </>
      )
    }
  </Container>
  
}

export default Detail;