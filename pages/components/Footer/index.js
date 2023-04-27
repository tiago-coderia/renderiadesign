import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-between min-h-[50px]">
      <p className="text-gradient">© 2023 All rights reserved.</p>
      <div className="flex gap-10">
        <Link
          href="https://www.linkedin.com/in/jonathantiiago/"
          className="link-primary"
          target="_blank"
        >
          Linkedin
        </Link>
        <Link
          href="https://www.behance.net/askdot"
          className="link-primary"
          target="_blank"
        >
          Behance
        </Link>
        <Link href="/curriculum.pdf" className="link-primary" target="_blank">
          Curriculum
        </Link>
      </div>
    </div>
  );
};
export default Footer;
