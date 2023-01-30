import React from "react";
import Image from "next/image";

function Container() {
  return (
    <div className="container">
      <div className="box">
        <Image
          src="/textanim.svg"
          alt=""
          width="245"
          height="245"
          className="spinImage"
        />
        <Image
          src="/profile.jpg"
          alt=""
          width="220"
          height="220"
          className="profileImage"
        />
        <div className="box__texts">
          <h1>JONATHAN TIAGO</h1>
          <h3>DESIGN & FRONT-END DEVELOPER</h3>
        </div>
        <div className="box__social_links">
          <a href="https://www.linkedin.com/in/jonathantiiago/" target="_blank">
            <i
              className="fa-brands fa-linkedin-in"
              title="Acesse meu Linkedin!"
            ></i>
          </a>
          <a href="https://github.com/tiago-coding" target="_blank">
            <i className="fa-brands fa-github" title="Let's Code!"></i>
          </a>
          <a href="https://www.behance.net/askdot" target="_blank">
            <i className="fa-brands fa-behance" title="Acesse meu Behance!"></i>
          </a>
          <a href="https://www.instagram.com/jonathan.tiiago/" target="_blank">
            <i
              className="fa-brands fa-instagram"
              title="Me siga no Instagram"
            ></i>
          </a>
          <a href="https://dribbble.com/askdot" target="_blank">
            <i
              className="fa-brands fa-dribbble"
              title="Acesse meu Dribbble"
            ></i>
          </a>
          <a href="http://wa.me/5547997926722" target="_blank">
            <i
              className="fa-brands fa-whatsapp"
              title="Me chame no Whatsapp"
            ></i>
          </a>
          <a href="cv.pdf" target="_blank">
            <i class="fa-regular fa-file-pdf" title="Baixe meu CV"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Container;
