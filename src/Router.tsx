import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Portifolio } from './pages/Portifolio';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route element={<Portifolio />} />
      </Route>
    </Routes>
  );
}
