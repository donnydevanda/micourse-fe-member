import { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import users from "api/users";
import Select from "./Form/Select";

function RegisterForm({ history }) {
  const dispatch = useDispatch();

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
          <div className="flex flex-col mb-4">
            <label
              htmlFor="name"
              className={[
                "text-lg mb-2",
                fieldErrors?.name?.message ? "text-red-500" : "text-gray-900",
              ].join(" ")}
            >
              Full Name
            </label>
            <input
              type="text"
              onChange={(event) => setName(event.target.value)}
              className={[
                "bg-white focus:outline-none border py-3 px-3 w-full ",
                fieldErrors?.name?.message
                  ? "focus:border-red-500 border-red-500"
                  : "border-gray-600 focus:border-blue-500 text-gray-600",
              ].join(" ")}
              value={Name}
              placeholder="Your Full Name"
            />
            <span className="text-red-500 pt-2">
              {fieldErrors?.name?.message}
            </span>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-lg mb-2">
              Email Address
            </label>
            <input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              className="bg-white focus:outline-none border py-3 px-3 w-full border-gray-600 focus:border-blue-500"
              value={Email}
              placeholder="Your Email Address"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-lg mb-2">
              Password
            </label>
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              className="bg-white focus:outline-none border py-3 px-3 w-full border-gray-600 focus:border-blue-500"
              value={Password}
              placeholder="Your Password"
            />
          </div>

          <div className="flex flex-col mb-4">
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
          </div>

          {Profession === "Others" && (
            <div className="flex flex-col mb-4">
              <label htmlFor="otherProfession" className="text-lg mb-2">
                Other Profession
              </label>
              <input
                type="text"
                onChange={(event) => setOtherProfession(event.target.value)}
                className="bg-white focus:outline-none border py-3 px-3 w-full border-gray-600 focus:border-blue-500"
                value={OtherProfession}
                placeholder="Your Other Profession"
              />
            </div>
          )}

          <button
            className="bg-yellow-600 hover:bg-yellow-500 text-white transition-all duration-200 
          focus:outline-none shadow-inner text-whitepx-6 py-3 mt-4 w-full"
          >
            Login
          </button>
        </form>
      </div>

      <div className="w-1/12"></div>

      <div className="hidden w-5/12 md:flex justify-end pt-24 pr-16">
        <div className="relative" style={{ width: 369, height: 440 }}>
          <div
            className="absolute border-indigo-700 border-2 -mt-8 -ml-16 left-0"
            style={{ width: 324, height: 374 }}
          />
          <div className="absolute w-full h-full -mb-8 -ml-8">
            <img src="/assets/images/hero-register.jpg" alt="Register Hero" />
          </div>
          <div className="absolute z-10 bg-white bottom-0 right-0 py-3 px-4 -mr-12">
            <p className="text-gray-900 text-base">
              Learning was never been so fun!
            </p>
            <p className="text-gray-600 text-sm">Anna, Web Developer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(RegisterForm);
