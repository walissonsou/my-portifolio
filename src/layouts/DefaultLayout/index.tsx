import { LayoutContainer } from "./styles";
import { Outlet } from 'react-router-dom';

export function DefaultLayout(){
 return (
  <LayoutContainer>
    <Outlet />
  </LayoutContainer>
 ) 
}
