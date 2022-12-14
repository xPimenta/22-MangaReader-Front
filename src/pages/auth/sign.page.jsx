import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { UserContext } from "../../contexts/user.context";
import { FormBanner, FormWrapper, Form } from "./form.styles.jsx";

export default function SignForm({ isSignUp }) {
  const navigate = useNavigate();
  const { userToken, logUserIn } = useContext(UserContext);

  const [formInput, setFormInput] = useState({});
  const [isAwaitingRequest, setIsAwaitingRequest] = useState(false);

  useEffect(() => {
    if (userToken != "undefined" && userToken) navigate("/");
  }, [userToken]);

  const handleInput = (e) => {
    const infoInput = e.currentTarget;
    formInput[infoInput.name] = infoInput.value;
    setFormInput({ ...formInput });
  };

  const validateFormInput = () => {
    const formErrors = [];
    if (!formInput.email) formErrors.push("Email is required");
    if (!formInput.password) formErrors.push("Password is required");
    if (!formInput.name && isSignUp) formErrors.push("username is required");
    if (!formInput.pictureURL && isSignUp) formErrors.push("pictureUrl is required");

    const formIsValid = formErrors.length === 0;
    if (!formIsValid) alertFormErrors(formErrors);
    return formIsValid;
  };

  const alertFormErrors = (formErrors) => window.alert(formErrors.map((e) => e));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAwaitingRequest && validateFormInput()) {
      setIsAwaitingRequest(true);
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/${isSignUp ? "sign-up" : "sign-in"}`,
          formInput
        )
        .then(({ data }) => logUserIn(data))
        .catch(({ response }) => alertFormErrors([response.data]))
        .finally(() => {
			setIsAwaitingRequest(false);
			navigate("/sign-in");
			//window.location.reload(false);
		});
    }
  };

  return (
    <FormWrapper>
      <FormBanner>
        <div>
          <h1>Manga Reader</h1>
          <h4>The Ultimate Manga App</h4>
        </div>
      </FormBanner>
      <Form>
        <Input
          type="text"
          placeholder="email"
          onChange={handleInput}
          name="email"
          required={true}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={handleInput}
          name="password"
          required={true}
        />
        {isSignUp && (
          <>
            <Input
              type="text"
              placeholder="name"
              onChange={handleInput}
              name="name"
              required={true}
            />
            <Input
              type="text"
              placeholder="pictureURL"
              onChange={handleInput}
              name="pictureURL"
              required={true}
            />
          </>
        )}
        <button onClick={handleSubmit}>{isSignUp ? "Sign Up" : "Login"}</button>
        <Link to={isSignUp ? "/sign-in" : "/sign-up"}>
          {isSignUp ? "Switch back to login" : "First Time? Create an account!"}
        </Link>
      </Form>
    </FormWrapper>
  );
}
