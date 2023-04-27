import React from "react";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className="flex flex-col min-h-[346px] pt-[140px] px-[20px] pb-[30px] bg-bgbutton gap-4 border-2 border-borderButton">
      <Image src={`/${props.icon}.svg`} width={44} height={44} />
      <h1 className="title text-gradient font-poppins font-semibold text-[20.8px] inline-block">
        {props.title}
      </h1>
      <p className="description title text-gradient font-poppins inline-block">
        {props.description}
      </p>
    </div>
  );
};
export default Card;
