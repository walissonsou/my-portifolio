import styled from "styled-components";

export const PortifolioListContainer = styled.section`
width: 100%;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
gap: 2rem;
margin-bottom: 14rem;


`

export const Container = styled.div`
@media (max-width: 630px) {
  flex-direction: column;  
  text-align: center;   
}
`
