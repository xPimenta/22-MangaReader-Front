import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import Post from "../Posts/Post";
import { PostsWrapper } from "../Posts/styles";

export default function Posts() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${id}`)
      .then(({ data }) => setPosts(data))
      .catch(() =>
        window.alert(
          "An error occured while trying to fetch the posts, please refresh the page",
        ),
      )
      .finally(() => setIsLoading(false));
  }, []);

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