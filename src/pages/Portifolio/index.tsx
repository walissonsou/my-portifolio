import { Profile } from "./components/Profile";
import { SearchInput } from "./components/Profile/SearchInput";
import { Post } from "./Post";
import { PortifolioListContainer } from "./styles";

export function Portifolio() {
  return (
    <>
      <Profile />
      <SearchInput />
      <PortifolioListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PortifolioListContainer>
    </>
  )
}
