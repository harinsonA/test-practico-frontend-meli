import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './ui/sections/Header';

const Home = lazy(() => import('./ui/pages/Home'));
const Detail = lazy(() => import('./ui/pages/Detail'));
const Result = lazy(() => import('./ui/pages/Results'));

function App() {
  return (
    <Suspense fallback={<div></div>}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Result />} />
          <Route path="/items/:id" element={<Detail />} />
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App;
