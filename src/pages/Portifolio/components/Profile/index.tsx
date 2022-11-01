import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { FaHackerrank, FaDev , FaTwitterSquare, FaGithub, FaLinkedin} from 'react-icons/fa'
import { ExternalLink } from "../../../../components/Header/ExternalLink";
export function Profile() {
  return (
    <>
      <ProfileContainer>
        <ProfilePicture src="https://github.com/walissonsou.png" />
        <ProfileDetails>
          <header>
            <h1> Walisson Souza </h1>
            <ExternalLink text="Github" />
          </header>
          <div>          
            <a href="#"> <FaHackerrank /> </a>
            <a href="#"> <FaDev /> </a>
            <a href="#"> <FaTwitterSquare /> </a>
            <a href="#"> <FaGithub /> </a>
            <a href="#"> <FaLinkedin /> </a>
          </div>
        </ProfileDetails>
      </ProfileContainer>
    </>
  )
}
