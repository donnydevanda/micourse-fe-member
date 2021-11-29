import { useEffect } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import SettingForm from "../components/SettingForm";

export default function Settings() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const DETAILS = useSelector((state) => state.users);

  return (
    <div className="flex">
      <Sidebar></Sidebar>

      <main className="flex-1">
        <div className="px-16">
          <section className="flex flex-col mt-8">
            <h1 className="text-3xl text-gray-900 mt-12">Settings</h1>
            <p className="text-lg text-gray-600 mt-4 mb-8">
              Secure your data informations.
            </p>
          </section>
          <SettingForm details={DETAILS}></SettingForm>
        </div>
      </main>
    </div>
  );
}
