import React from "react";
import CardPortfolio from "../CardPortfolio";
import Link from "next/link";

const LastProjects = () => {
  return (
    <div
      className="mb-2 border-b-[1px] border-default border-opacity-10 pb-10"
      id="lastest"
    >
      <div className="relative flex py-8 items-center">
        <span className="flex-grow border-t border-default border-opacity-10"></span>
        <h1 className="text-gradient text-5xl font-semibold leading-normal">
          Lastests Projects...
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <CardPortfolio
          imgname="site-tatimkt"
          descricao="Tati Fashion MKT | Worpdress"
          endereco="http://tatifashionmkt.com.br"
        />

        <CardPortfolio
          imgname="site-ceigentemiuda"
          descricao="CEI Gente Miúda | Worpdress"
          endereco="http://ceigentemiuda.com.br"
        />

        <CardPortfolio
          imgname="site-clinicaochoa"
          descricao="Clinica Ochoa | Worpdress"
          endereco="http://clinicaochoa.com.br"
        />
        <CardPortfolio
          imgname="site-pokenext"
          descricao="PokeNext | NextJS | API | Tailwindss"
          endereco="https://pokenext-m8vuf1zyl-tiago-coding.vercel.app/"
        />
      </div>
    </div>
  );
};
export default LastProjects;
