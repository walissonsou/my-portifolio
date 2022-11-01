import styled from "styled-components";

export const ProfileContainer = styled.section`
width: 100%;
min-height: 13.25rem;
margin-top: -9rem;
background: ${({theme}) => theme.colors["base-profile"]};
box-shadow: 0px 2px 28px rgba(0,0,0,0.2);
border-radius: 10px;
padding: 2rem 2.5rem;
display: flex;
gap: 2rem;
`

export const ProfilePicture = styled.img`
clip-path: circle(50% at 50% 50%);
width: 12.25rem;
height: 12.25rem;
border-radius: 20px;
` 
export const ProfileDetails =styled.div`
flex: 1;
display: flex;
flex-direction: column;

header{
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
}
div{
  display: flex;
  margin-top: 100px;
  justify-content: center;
  gap: 5rem;
  
  }
a:hover:before { animation: rumble-before .1s linear infinite; }
a:hover:after  { animation: rumble-after .1s linear infinite;  }
`
