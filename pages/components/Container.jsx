import React from "react";
import Image from "next/image";

function Container() {
  return (
   
    <div class="container">
    <header class="border-bottom">
      <nav>
        <div class="get-in-touch">
          <ion-icon name="mail-outline"></ion-icon>
          <a href="mailto:tiago.coderia@gmail.com">Get in Touch</a>
        </div>
        <ul class="nav-desktop">
          <li>
            <a
              href="https://www.linkedin.com/in/jonathantiiago/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/askdot" target="_blank">
              Behance
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jonathan.tiiago/"
              target="_blank"
            >
              Instagram
            </a>
          </li>
        </ul>
        <ul class="nav-mobile">
          <li>
            <a
              href="https://www.linkedin.com/in/jonathantiiago/"
              target="_blank"
            >
              <ion-icon name="logo-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/askdot" target="_blank">
              <ion-icon name="logo-behance" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jonathan.tiiago/"
              target="_blank"
              ><ion-icon name="logo-instagram" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section class="hero">
        <Image src="/profile.jpg" class="d-block w-100" alt="..." width={150} height={150}/>
        <div class="hero--name">
          <p>Hi, I'm Tiago, from Blumenau - Brazil</p>
          <img src="/handshaking.svg" />
        </div>
        <h1 class="gradient-text">
          Building Landing Pages <br />and Web Interfaces. <br />Expert in UI
          & UX!
        </h1>
        <a href="" class="btn-primary"
          >Lastes Shots <ion-icon name="add-outline"></ion-icon
        ></a>
      </section>
      <section class="proficiency border-bottom">
        <div class="cta">
          <h2 class="gradient-text text-center">
            Collaborate with brands and agencies<br />
            to create impactful results.
          </h2>
        </div>
        <div class="cards">
          <div class="card card-uix">
            <img src="/icon-uxui.svg" alt="" />
            <h5 class="gradient-text">UX & UI</h5>
            <p>
              Designing interfaces that are intuitive, efficient, and
              enjoyable to use.
            </p>
          </div>
          <div class="card card-webMobile">
            <img src="/icon-webmobile.svg" alt="" />
            <h5 class="gradient-text">Web & Mobile App</h5>
            <p>
              Transforming ideas into exceptional web and mobile app
              experiences.
            </p>
          </div>
          <div class="card card-design">
            <img src="/icon-designcreative.svg" alt="" />
            <h5 class="gradient-text">Design & Creative</h5>
            <p>
              Crafting visually stunning designs that connect with your
              audience.
            </p>
          </div>
          <div class="card card-development">
            <img src="/icon-development.svg" alt="" />
            <h5 class="gradient-text">Development</h5>
            <p>
              Bringing your vision to life with the latest technology and
              design trends.
            </p>
          </div>
        </div>
      </section>
      <section class="next-project border-bottom">
        <h1 class="gradient-text">
          Tell me about your <br />
          next project
        </h1>
        <a href="mailto:tiago.coderia@gmail.com" class="btn-primary">
          Get in Touch
          <ion-icon name="mail-outline" />
        </a>
      </section>
    </main>
    <footer>
      <nav>
        <p>© 2023 All rights reserved.</p>
        <ul class="nav-desktop">
          <li>
            <a
              href="https://www.linkedin.com/in/jonathantiiago/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/askdot" target="_blank">
              Behance
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jonathan.tiiago/"
              target="_blank"
            >
              Instagram
            </a>
          </li>
        </ul>
        <ul class="nav-mobile">
          <li>
            <a
              href="https://www.linkedin.com/in/jonathantiiago/"
              target="_blank"
            >
              <ion-icon name="logo-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/askdot" target="_blank">
              <ion-icon name="logo-behance" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jonathan.tiiago/"
              target="_blank"
              ><ion-icon name="logo-instagram" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
  );
}

export default Container;
