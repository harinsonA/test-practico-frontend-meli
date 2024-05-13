import { useSearchParams } from 'react-router-dom';
import useFetch from '../../lib/hooks/useFetch';

import Errors from '../sections/Errors';
import Container from '../containers/Container';
import Breadcrumb from '../compoments/breadcrumb/Breadcrumb';
import BreadcrumbSkeleton from '../compoments/breadcrumb/BreadcrumbSkeleton';
import List from '../compoments/list/List';
import ListSkeleton from '../compoments/list/ListSkeleton';

const Result = () => {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('search');
  const [result, error] = useFetch(`?q=${searchValue}`);

  if (error) {
    return <Errors />
  }

  return (
    <Container>
      {(result) ?
        (
          <>
            <Breadcrumb categories={result.categories} />
            <List items={result.items} />
          </>
        )
        : (
          <>
            <BreadcrumbSkeleton />
            <ListSkeleton />
          </>
        )
      }
    </Container>
  )
}

export default Result;