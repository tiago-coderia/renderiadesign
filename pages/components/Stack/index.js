import React from "react";
import TechIcons from "../TechIcons";
import Link from "next/link";

const Stack = () => {
  return (
    <div className="mb-2 border-b-[1px] border-default border-opacity-10">
      <div className="relative flex py-5 items-center">
        <h1 className="text-gradient text-5xl font-semibold">My Stack</h1>
        <span className="flex-grow border-t border-default border-opacity-10"></span>
      </div>
      <div className="grid lg:grid-cols-10 md:grid-cols-5 sm:grid-cols-4  grid-cols-2 justify-center items-center">
        <Link href="https://nextjs.org/" target="_blank" prefetch>
          <TechIcons icone="nextjs" />
        </Link>
        <Link href="https://tailwindcss.com/" target="_blank" prefetch>
          <TechIcons icone="tailwind" />
        </Link>
        <Link href="https://github.com/" target="_blank" prefetch>
          <TechIcons icone="git" />
        </Link>
        <Link href="https://nodejs.org/" target="_blank" prefetch>
          <TechIcons icone="node" />
        </Link>
        <Link href="https://openai.com/" target="_blank" prefetch>
          <TechIcons icone="openai" />
        </Link>
        <Link href="https://www.postman.com/" target="_blank" prefetch>
          <TechIcons icone="postman" />
        </Link>
        <Link href="https://www.wordpress.com/" target="_blank" prefetch>
          <TechIcons icone="wordpress" />
        </Link>
        <Link href="https://www.json.org/" target="_blank" prefetch>
          <TechIcons icone="json" />
        </Link>
        <Link href="https://www.figma.com/" target="_blank" prefetch>
          <TechIcons icone="figma" />
        </Link>
        <Link href="https://www.adobe.com/" target="_blank" prefetch>
          <TechIcons icone="adobe" />
        </Link>
      </div>
    </div>
  );
};
export default Stack;
