import styled from "styled-components";
export const SearchInputContainer = styled.form`
width: 100%;
margin-top: 1.5rem;
margin-bottom: 1rem;

header {
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin-bottom: 0.85rem;


  h3{
    font-size: ${({theme}) => theme.textSizes["title-title-s"]};
    color: white;

    }

    span {
      font-size: ${({ theme}) => theme.textSizes["text-text-s"]};
      color: white;

    }
}
input {
  width: 50%;
  padding: 0.7rem 1rem;
  border-radius: 6px;
  background-color: ${({theme}) => theme.colors["base-input"]};
  border: 1px solid ${({theme}) => theme.colors["base-border"]};
  color: ${({ theme}) => theme.colors["base-text"]};
  transition: 0.4s;

  &:focus{
    outline: none;
    border-color: ${({ theme}) => theme.colors["brand-blue"]};
    }
    &::placeholder{
      color:${({ theme}) => theme.colors["base-label"]};
    }
}
`;
