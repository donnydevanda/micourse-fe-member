import { useEffect } from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

export default function Login() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="container mx-auto pt-10 px-4 guest-page">
        <Header onLight />
      </section>
      <section className="container mx-auto pt-10 px-4 guest-page">
        <LoginForm />
      </section>
      <section className="mt-24 bg-indigo-900">
        <Footer />
      </section>
    </>
  );
}
