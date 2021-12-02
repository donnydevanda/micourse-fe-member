import { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { populateProfile } from "../store/actions/users";
import { setAuthorizationHeader } from "../configs/axios";
import UserAPI from "../api/user";
import Input from "./Form/Input";
import Button from "./Form/Button";
import HeroImage from "./HeroImage";

function LoginForm({ history }) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState(() => "");
  const [Password, setPassword] = useState(() => "");

  function submit(e) {
    e.preventDefault();

    UserAPI.login({ email: Email, password: Password })
      .then((res) => {
        setAuthorizationHeader(res.data.token);
        UserAPI.details().then((detail) => {
          dispatch(populateProfile(detail.data));
          const production =
            process.env.REACT_APP_FRONTPAGE_URL ===
            "https://micourse.vercel.app"
              ? "Domain = micourse.vercel.app"
              : "";
          localStorage.setItem(
            "MICOURSE:token",
            JSON.stringify({
              ...res.data,
              email: Email,
            })
          );

          const redirect = localStorage.getItem("MICOURSE:redirect");
          const userCookie = {
            name: detail.data.name,
            thumbnail: detail.data.avatar,
          };

          const expires = new Date(
            new Date().getTime() + 7 * 24 * 60 * 60 * 1000
          );

          document.cookie = `MICOURSE:user=${JSON.stringify(
            userCookie
          )}- expires=${expires.toUTCString()}- path:/- ${production}`;

          console.log(userCookie);

          history.push(redirect || "/");
        });
      })
      .catch((err) => {});
  }

  return (
    <div className="flex justify-center items-center pb-24">
      <div className="w-full sm:w-3/12">
        <h1 className="text-4xl text-gray-900 mb-6">
          <span className="font-bold">Continue </span>Study, Finish Your{" "}
          <span className="font-bold">Goals.</span>
        </h1>
        <form onSubmit={submit}>
          <Input
            labelName="Email Address"
            labelFor="email"
            inputType="email"
            onChange={(event) => setEmail(event.target.value)}
            value={Email}
            placeholder="Your Email Address"
          />
          <Input
            labelName="Password"
            labelFor="password"
            inputType="password"
            onChange={(event) => setPassword(event.target.value)}
            value={Password}
            placeholder="Your Password"
          />
          <Button text="Login" />
        </form>
      </div>
      <div className="w-1/12 hidden sm:block" />
      <div className="w-5/12 hidden sm:block md:flex justify-end pt-24 pr-16">
        <HeroImage
          imageSrc="/images/hero-login.jpg"
          imageAlt="Login Hero"
          textReview="So Many Course To Explore, Love It!"
          textUser="Livya, UX Writter"
        />
      </div>
    </div>
  );
}

export default withRouter(LoginForm);
