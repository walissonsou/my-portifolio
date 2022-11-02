import { useCallback, useState } from "react";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/Profile/SearchInput";
import { Post } from "./Post";
import { PortifolioListContainer } from "./styles";

interface IPost{
  title: string;
}

export function Portifolio() {
  const [ post, setPosts ] = useState<IPost[]>([]);

  const getPosts = useCallback( async() => {
    try{

    } finally {

    }

  }, [posts])

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
