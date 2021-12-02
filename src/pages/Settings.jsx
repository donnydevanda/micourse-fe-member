import { useEffect } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import SettingForm from "../components/SettingForm";

export default function Settings() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const DETAILS = useSelector((state) => state.users);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <div className="px-4 sm:px-16">
          <PageHeader
            title="Settings"
            subtitle="Secure your data informations."
          />
          <section className="flex flex-col mt-8">
            <SettingForm details={DETAILS} />
          </section>
        </div>
      </main>
    </div>
  );
}
