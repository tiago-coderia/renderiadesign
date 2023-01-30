import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>JonathanTiago | FrontEndDev & Designer</title>
        <meta
          name="description"
          content="Portfolio Renderia Design e Front End Dev"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        ></link>
      </Head>
      <main>
        <div class="container">
          <div class="box">
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
            <div class="box__texts">
              <h1>JONATHAN TIAGO</h1>
              <h3>DESIGN & FRONT-END DEVELOPER</h3>
            </div>
            <div class="box__social_links">
              <a
                href="https://www.linkedin.com/in/jonathantiiago/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/tiago-coding" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://www.behance.net/askdot" target="_blank">
                <i class="fa-brands fa-behance"></i>
              </a>
              <a
                href="https://www.instagram.com/jonathan.tiiago/"
                target="_blank"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://dribbble.com/askdot" target="_blank">
                <i class="fa-brands fa-dribbble"></i>
              </a>
              <a href="http://wa.me/5547997926722" target="_blank">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
