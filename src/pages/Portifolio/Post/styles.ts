import styled from "styled-components";

export const PostContainer = styled.div`
width: 100%;
height: 16.25rem;
border-radius: 10px;
opacity: 0.9;
background: transparent;
box-shadow: 0px 2px 28px black;
padding: 2rem;
transition: 0.4s;

&:hover{
  border-color: ${({ theme }) => theme.colors["base-label"]}

}
div{
  display: flex;
  gap: 1rem;
  margin-bottom: 1.25rem
}

strong {
  flex: 1;
  font-size: ${({theme}) => theme.textSizes["title-title-m"]};
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
span {
  width: max-content;
  ont-size: ${({theme}) => theme.textSizes["title-title-s"]};
  color: white; 
}
p{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
`
