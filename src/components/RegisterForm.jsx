import { useState } from "react";
import { withRouter } from "react-router-dom";
import users from "api/users";
import Select from "./Form/Select";
import Input from "./Form/Input";
import HeroImage from "./HeroImage";
import Button from "./Form/Button";

function RegisterForm({ history }) {
  const [Name, setName] = useState(() => "");
  const [Email, setEmail] = useState(() => "");
  const [Password, setPassword] = useState(() => "");
  const [Profession, setProfession] = useState(() => "");
  const [OtherProfession, setOtherProfession] = useState(() => "");

  const [Errors, setErrors] = useState(null);

  async function submit(e) {
    e.preventDefault();
    users
      .register({
        name: Name,
        email: Email,
        password: Password,
        profession: Profession === "Others" ? OtherProfession : Profession,
      })
      .then((res) => {
        history.push("/login");
      })
      .catch((err) => {
        setErrors(err?.response?.data?.message);
      });
  }

  const fieldErrors =
    typeof Errors === "object" &&
    Errors?.reduce((listErrors, error) => {
      if (error?.field) listErrors[error.field] = error;
      return listErrors;
    }, {});

  return (
    <div className="flex justify-center items-center pb-24">
      <div className="w-3/12">
        <h1 className="text-4xl text-gray-900 mb-6">
          <span className="font-bold">Grow Skills </span>From Anywhere
        </h1>
        <form onSubmit={submit}>
          <Input
            labelName="Full Name"
            labelFor="name"
            inputType="text"
            onChange={(event) => setName(event.target.value)}
            value={Name}
            placeholder="Your Full Name"
            errorMessage={fieldErrors?.name?.message}
          />
          <Input
            labelName="Email Address"
            labelFor="email"
            inputType="email"
            onChange={(event) => setEmail(event.target.value)}
            value={Email}
            placeholder="Your Email Address"
            errorMessage={fieldErrors?.email?.message}
          />
          <Input
            labelName="Password"
            labelFor="password"
            inputType="password"
            onChange={(event) => setPassword(event.target.value)}
            value={Password}
            placeholder="Your Password"
            errorMessage={fieldErrors?.password?.message}
          />
          <Select
            labelName="Profession"
            name="profession"
            value={Profession}
            fallbackText="Select Your Focus"
            onClick={setProfession}
          >
            <option value="">Select Your Focus</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Product Manager">Product Manager</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Others">Others</option>
          </Select>
          {Profession === "Others" && (
            <Input
              labelName="Other Profession"
              labelFor="other Profession"
              inputType="text"
              onChange={(event) => setOtherProfession(event.target.value)}
              value={OtherProfession}
              placeholder="Your Other Profession"
              errorMessage={fieldErrors?.OtherProfession?.message}
            />
          )}
          <Button text="Register" />
        </form>
      </div>

      <div className="w-1/12"></div>

      <div className="hidden w-5/12 md:flex justify-end pt-24 pr-16">
        <HeroImage
          imageSrc="/images/hero-register.jpg"
          imageAlt="Register Hero"
          textReview="I Learn So Many Things!"
          textUser="Leo, Audio Engineer."
        />
      </div>
    </div>
  );
}

export default withRouter(RegisterForm);
