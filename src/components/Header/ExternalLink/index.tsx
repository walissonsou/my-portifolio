import { ComponentProps } from "react";
import { ExternalLinkContainer } from "./styles";

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string;
}

export function ExternalLink({text, ...rest}: ExternalLinkProps){
  return(
    <ExternalLinkContainer {...rest} >
      {text}
    </ExternalLinkContainer>
  )
}
