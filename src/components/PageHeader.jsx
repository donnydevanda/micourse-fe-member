import React from "react";

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="flex flex-col mt-8 pl-12 sm:pl-0 ml-4">
      <h1 className="text-xl sm:text-4xl text-gray-900 font-medium">{title}</h1>
      <p className="text-sm sm:text-lg text-gray-600">{subtitle}</p>
    </section>
  );
}
