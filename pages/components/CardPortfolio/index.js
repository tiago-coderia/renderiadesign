import React from "react";
import Image from "next/image";
import Button from "../Buttons/primary";

const CardPortfolio = (props) => {
  return (
    <div className="cardsPortfolio flex flex-col gap-4 items-center bg-bgbutton border-2 border-borderButton p-4 grayscale hover:grayscale-0 transition-all duration-200">
      <Image src={`/${props.imgname}.jpg`} width={400} height={185} />
      <p className="text-default">{props.descricao}</p>
      <Button endereco={props.endereco}>Acessar</Button>
    </div>
  );
};
export default CardPortfolio;
