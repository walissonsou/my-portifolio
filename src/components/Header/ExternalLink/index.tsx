import { ComponentProps } from "react";
import { ExternalLinkContainer } from "./styles";
import { FaExternalLinkAlt } from 'react-icons/fa'

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string;
}

export function ExternalLink({text, ...rest}: ExternalLinkProps){
  return(
    <ExternalLinkContainer {...rest} >
      {text} 
      <FaExternalLinkAlt />
      
    </ExternalLinkContainer>
  )
}
