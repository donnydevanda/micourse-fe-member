import { useEffect } from "react";

import Header from "components/Header";
import RegisterForm from "components/RegisterForm";
import Footer from "components/Footer";

export default function Register({ history }) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="container mx-auto pt-10">
        <Header onLight></Header>
      </section>
      <section className="container mx-auto pt-10">
        <RegisterForm></RegisterForm>
      </section>
      <section className="mt-24 bg-indigo-900">
        <Footer></Footer>
      </section>
    </>
  );
}
