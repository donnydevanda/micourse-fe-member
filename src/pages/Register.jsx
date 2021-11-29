import { useEffect } from "react";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";

export default function Register() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="container mx-auto pt-10">
        <Header onLight />
      </section>
      <section className="container mx-auto pt-10">
        <RegisterForm />
      </section>
      <section className="mt-24 bg-indigo-900">
        <Footer />
      </section>
    </>
  );
}
