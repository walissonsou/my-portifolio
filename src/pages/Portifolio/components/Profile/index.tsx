import { ProfileContainer, ProfileDetails, ProfileLinks, ProfilePicture } from "./styles";
import { FaHackerrank, FaDev, FaTwitterSquare, FaGithub, FaLinkedin, FaBuilding } from 'react-icons/fa'
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
            Every single day, every word you say, every game you play, every night you stay, I'll be watching you.
          </p>
          <ul>
            <li>
              <FaGithub />
              Walissonsou
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
