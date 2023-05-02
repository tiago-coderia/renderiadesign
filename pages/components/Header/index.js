import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="min-h-[100px] flex items-center justify-between border-b-[1px] border-default  border-opacity-10 flex-col sm:flex-row py-4 sm:py-0">
      <div>
        <Link
          href="mailto:tiago.coderia@gmail.com"
          className="link-primary flex items-center gap-4"
          target="_blank"
        >
          <div className="iconHeader">
            <ion-icon name="mail-outline" />
          </div>
          <p className="">Get in Touch</p>
        </Link>
      </div>
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
export default Header;
