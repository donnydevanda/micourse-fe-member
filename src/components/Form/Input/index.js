import React from "react";

export default function Input({
  labelName,
  labelFor,
  inputType,
  onChange,
  value,
  placeholder,
  errorMessage,
}) {
  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor={labelFor}
        className={[
          "text-lg mb-2",
          errorMessage ? "text-red-500" : "text-gray-900",
        ].join(" ")}
      >
        {labelName}
      </label>

      <input
        type={inputType}
        onChange={onChange}
        className={[
          "bg-white focus:outline-none border py-3 px-3 w-full ",
          errorMessage
            ? "focus:border-red-500 border-red-500"
            : "border-gray-600 focus:border-blue-500 text-gray-600",
        ].join(" ")}
        value={value}
        placeholder={placeholder}
      />

      <span className="text-red-500 pt-2">{errorMessage}</span>
    </div>
  );
}
