import React from "react";

const Button = (props) => {
  return (
    <a
      href={props.endereco}
      className="text-default border-[1px] border-borderButton px-8 py-4 bg-bgbutton font-normal hover:border-lightning transition-all duration-200 hover:scale-95 cursor-pointer"
    >
      {props.children}
    </a>
  );
};
export default Button;
