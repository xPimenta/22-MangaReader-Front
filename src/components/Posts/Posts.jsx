import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import Post from "./Post";
import { PostsWrapper } from "./styles";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userToken } = useContext(UserContext);

  useEffect(() => {
    if (userToken) {
      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      };

      axios
        .get(`${process.env.REACT_APP_API_URL}/timeline`, config)
        .then(({ data }) => setPosts(data))
        .catch(() =>
          window.alert(
            "An error occured while trying to fetch the posts, please refresh the page",
          ),
        )
        .finally(() => setIsLoading(false));
    }
  }, [userToken]);

  if (isLoading) return <PostsWrapper>Loading...</PostsWrapper>;

  return (
    <PostsWrapper>
      {posts.length > 0
        ? posts.map((post) => (
            <Post
              key={post.id}
              pictureUrl={post.pictureUrl}
              username={post.username}
              description={post.description}
              linkData={post.linkData}
              userHasLiked={post.userHasLiked}
              likes={post.likes}
              postId={post.id}
              authorId={post.authorId}
            />
          ))
        : "There are no posts yet"}
    </PostsWrapper>
  );
}
