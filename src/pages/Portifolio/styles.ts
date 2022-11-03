import styled from "styled-components";

export const PortifolioListContainer = styled.section`
width: 100%;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
gap: 2rem;
margin-bottom: 14rem;


`

export const Container = styled.div`
  width: 100%;
  max-width: 59rem;
  margin: 0 auto;
@media (max-width: 630px) {
  flex-direction: column;  
  text-align: center;   
}
`
