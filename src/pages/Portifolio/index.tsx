import { useCallback, useEffect, useState } from "react";
import { api } from "../../libs/axios";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/Profile/SearchInput";
import { Post } from "./Post";
import { Container, PortifolioListContainer } from "./styles";

const username = 'walissonsou';
const repoName = 'meublog';

export interface IPost{
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments:number;
  user: {
    login:string;
  };
}

export function Portifolio() {
  const [ posts, setPosts ] = useState<IPost[]>([]);
  const [ isLoading, setIsLoading] = useState(true)
  const getPosts = useCallback(
    async (query: string = "") => {
    try {
      setIsLoading(true)
      const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repoName}`
      );

      setPosts(response.data.items);
    } finally {
      setIsLoading(false)
    }
  },
  [posts]
);
  
useEffect(() => {
    getPosts()
  }, [])

  return (
    
    <Container >
      <Profile />
      <SearchInput getPosts={getPosts} />
      <PortifolioListContainer>
        {posts.map((post) => (
          <Post key={post.number} post={post}/>
        ))}             
      </PortifolioListContainer>
    </Container>
    
  )
}
