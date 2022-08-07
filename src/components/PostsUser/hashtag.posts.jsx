import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";

import { UserContext } from "../../contexts/user.context";

import Post from "../Posts/Post";
import { PostsWrapper } from "../Posts/styles";

export default function PostsHash() {
  const { hashtag } = useParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userToken, userInfo } = useContext(UserContext);

  useEffect(() => {

    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    axios
      .get(`${process.env.REACT_APP_API_URL}/hashtag/${hashtag}`, config)
      .then(({ data }) => setPosts(data))
      .catch(() =>
        window.alert(
          "HASHTAG ERROR an error occured while trying to fetch the posts, please refresh the page",
        ),
      )
      .finally(() => setIsLoading(false));
  }, [hashtag]);

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