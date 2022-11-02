import { ProfileContainer, ProfileDetails, ProfileLinks, ProfilePicture } from "./styles";
import { FaHackerrank, FaDev, FaTwitterSquare, FaGithub, FaLinkedin, FaBuilding , FaEnvelopeOpenText} from 'react-icons/fa'
import { ExternalLink } from "../../../../components/Header/ExternalLink";
export function Profile() {
  return (
    <>
      <ProfileContainer>
        <ProfilePicture src="https://github.com/walissonsou.png" />
        <ProfileDetails>
          <header>
            <h1> Hey, I'm Walisson ;<span>) </span> </h1>
            <ExternalLink text="Blog" />
          </header>
          <p>
          O que me interessa é estar do lado de pessoas que se sentem vivas por dentro e não meçam esforços para consertar seu contexto ao redor independente de quais ferramentas inventarem para poder fazer isso.

          </p>
          <ul>
            <li>
              
              <a href="mailto:walissonsouza96@hotmail.com"> <FaEnvelopeOpenText />  Contate-me </a>
            </li>
            <li>
              <FaBuilding />
              Assuncion
            </li>
          </ul>
          <ProfileLinks>
            <a href="#"> <FaHackerrank /> </a>
            <a href="#"> <FaDev /> </a>
            <a href="#"> <FaTwitterSquare /> </a>
            <a href="#"> <FaGithub /> </a>
            <a href="#"> <FaLinkedin /> </a>
          </ProfileLinks>
        </ProfileDetails>
      </ProfileContainer>
    </>
  )
}
