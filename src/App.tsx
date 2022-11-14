import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { Portifolio } from './pages/Portifolio';
import { Router } from "./Router";
import { GlobalStyles } from './styles/global'
import { defaultTheme } from "./styles/theme/defaultTheme";


export function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>      
    </BrowserRouter>
  )
}
