import styled from "styled-components";

export const ProfileContainer = styled.section`
width: 100%;
min-height: 23.25rem;
margin-top: -16.5rem;
opacity: 0.95;
background: transparent;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white; text-shadow: black 0.8em 0.2em 0.2em; 
  font-size: 39px;
  letter-spacing: .1rem;
  align-items: center;
  justify-content: space-between;
}
span{
  color: gold;
}
p {
  text-shadow: black 0.1em 0.2em 0.2em; 
  letter-spacing: .1rem;
  margin-top: 4rem;
}

ul {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 0.2rem;
}
  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    svg {
    width: 1.1rem;
    height: 1.1rem;
    color: ${({ theme}) => theme.colors["base-label"]}
  }
  }

  
`
export const ProfileLinks = styled.a`
  display: flex;
  margin: 3rem auto;
  justify-content: center;
  gap: 5rem;  
  font-size: 1.5rem;
  transition: 0.4s;
  border: none;
  background: none; 
  border-bottom: 0.2px solid transparent;

a:hover{
  transform: translate(-.4rem);
  color: #FEFCBF;
  transition: 0.9s;  
}
`
