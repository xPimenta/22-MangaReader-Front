import { Input } from "../Input";
import { Form, FormWrapper2, ImgTitleWrapper } from "../../styles/form.style";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import pictureUrl2 from "../../assets/default-avatar.jpg";
import { PostWrapper } from "../Posts/styles";

export default function PostForm() {
  const { userToken } = useContext(UserContext);


  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [isAwaitingRequest, setIsAwaitingRequest] = useState(false);

  const handleSubmit = (e) => {
    // e.preventDefault();
    setIsAwaitingRequest(true);
    setDescription("");
    setUrl("");

    const data = { url, description };

    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/timeline`, data, config)
      .then((response) => {
        setIsAwaitingRequest(false);
        console.log("Sucess to send post", response);
      })
      .catch(({ response }) => {
        e.preventDefault();
        setIsAwaitingRequest(false);
        alert(response.data || "Houve um erro ao publicar seu link");
      });
  };

  return (
    // <PostWrapper>
    <FormWrapper2>
      <ImgTitleWrapper>
        <img src={pictureUrl2} alt="avatar" />
        <p>What are you sharing today?</p>
      </ImgTitleWrapper>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="http://..."
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          name="url"
          disabled={isAwaitingRequest}
          required
        />
        <Input
          type="text"
          placeholder="Awesome article about #javascript"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          name="description"
          disabled={isAwaitingRequest}
        />
        <button type="submit" disabled={isAwaitingRequest}>
          {isAwaitingRequest ? "Publishing..." : "Publish"}
        </button>
      </Form>
    </FormWrapper2>
    // </PostWrapper>
  );
}
