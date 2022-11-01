import { Routes, Route } from 'react-router-dom'
import { Portifolio } from './pages/Portifolio'

export function Router() {
  return (
    <Routes>
      <Route
        path="/" element={<Portifolio />} >
        <Route path="/" element={<Portifolio />} />
      </Route>

    </Routes>
  )
}
