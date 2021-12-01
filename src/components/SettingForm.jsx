import { useState, useRef } from "react";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { populateProfile } from "../store/actions/users";
import useForm from "../helpers/hooks/useForm";
import fieldErrors from "../helpers/fieldErrors";
import UserAPI from "../api/user";
import MediaAPI from "../api/media";
import Select from "./Form/Select";
import Input from "./Form/Input";
import Button from "./Form/Button";
import image2base64 from "../utils/image2base64";
import { ReactComponent as IconUser } from "../assets/images/ic-avatar.svg";

function SettingForm({ details }) {
  const dispatch = useDispatch();
  const addPicture = useRef(null);

  const [state, setKey, setState] = useForm({
    name: details?.name ?? "",
    email: details?.email ?? "",
    profession: details?.profession ?? "",
    avatar: details?.avatar ?? "",
    password: details?.password ?? "",
    otherProfession: details?.otherProfession ?? "",
  });

  const [Errors, setErrors] = useState(null);

  function previewImage(e) {
    e.persist();
    image2base64(e.target.files[0]).then((image) => {
      setKey({
        target: {
          name: e.target.name,
          value: image,
        },
      });
    });
  }

  async function submit(e) {
    e.preventDefault();
    const payload = {
      name: state.name,
      email: state.email,
      password: state.password,
      profession: state.name,
    };
    if (payload.profession === "others")
      payload.profession = state.otherProfession;
    if (state.avatar.indexOf("base64") > 1) {
      const avatar = MediaAPI.upload(state.avatar);
      payload.avatar = await avatar.data.image;
    }
    UserAPI.update(payload).then((res) => {
      toast.success("Profile Updated");
      setState({
        ...state,
        password: "",
      });
      setErrors(null);
      dispatch(
        populateProfile({
          ...details,
          ...res.data,
        }).catch((error) =>
          setErrors(error?.response?.data?.message ?? "errors")
        )
      );
    });
  }

  const ERRORS = fieldErrors(Errors);

  return (
    <>
      <section className="flex flex-col mt-8">
        <div className="flex justify-start items-center">
          <div className="w-auto text-center -px-5">
            <div className="rounded-full overflow-hidden w-24 h-24 mr-4">
              {state.avatar ? (
                <img
                  className="object-cover w-full h-full"
                  src={state.avatar}
                  alt="Preview"
                />
              ) : (
                <IconUser
                  className="fill-indigo-500"
                  style={{ width: 90, height: 90 }}
                ></IconUser>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col">
            <span className="text-gray-600">Add your picture...</span>
            <div>
              <input
                type="file"
                name="avatar"
                ref={addPicture}
                className="hidden"
                onChange={previewImage}
              />
              <button
                onClick={() => addPicture.current.click}
                className="bg-yellow-600 hover:bg-yellow-500 text-white transition-all duration-200 
          focus:outline-none shadow-inner text-whitepx-6 py-2 mt-3 px-8"
              >
                Browse
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col mt-8">
        <div className="flex items-center pb-24">
          <div className="w-full sm:w-4/12">
            <form onSubmit={submit}>
              <Input
                labelName="Full Name"
                labelFor="name"
                inputType="text"
                onChange={setKey}
                value={state.name}
                placeholder="Your Full Name"
                errorMessage={ERRORS?.name?.message}
              />
              <Input
                labelName="Email Address"
                labelFor="email"
                inputType="email"
                onChange={setKey}
                value={state.email}
                placeholder="Your Email Address"
                errorMessage={ERRORS?.email?.message}
              />
              <Input
                labelName="Password"
                labelFor="password"
                inputType="password"
                onChange={setKey}
                value={state.password}
                placeholder="Your Password"
                errorMessage={ERRORS?.password?.message}
              />
              <Select
                labelName="Profession"
                name="profession"
                value={state.profession}
                fallbackText="Select Your Focus"
                onClick={setKey}
              >
                <option value="">Select Your Focus</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Product Manager">Product Manager</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Others">Others</option>
              </Select>
              {state.profession === "Others" && (
                <Input
                  labelName="Other Profession"
                  labelFor="other Profession"
                  inputType="text"
                  onChange={setKey}
                  value={state.otherProfession}
                  placeholder="Your Other Profession"
                  errorMessage={ERRORS?.OtherProfession?.message}
                />
              )}
              <Button text="Save" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default withRouter(SettingForm);
