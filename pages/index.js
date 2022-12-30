import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <div className="flex items-center flex-col sjustify-center w-screen h-auto md:h-screen my-5 md:my-auto overflow-x-hidden ">
      <Head>
        <title>renderiadesign.</title>
        <meta name="description" content="designer by Hawkzera" />
        <link rel="icon" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="absolute right-20 top-20 gap-5 hidden md:flex">
        <button className="btn btnClickMe bg-lightning text-darken hover:bg-darken hover:text-lightning p-2 transition-all">
          Click Me
        </button>
        <a
          className="btn bg-lightning text-darken hover:bg-darken hover:text-lightning p-2 transition-all"
          href="cv.pdf"
          target="_blank"
        >
          Resume
        </a>
      </div>
      <main className="w-screen h-screen snap-y snap-mandatory overflow-y-scroll">
        <div className="w-full h-screen snap-start flex justify-center items-center">
          <div className="w-[960px]">
            <h1 className="font-JetBrains text-2xl md:text-5xl font-bold">
              Hey, how's it going? 👋
            </h1>
            <h3 className="font-JetBrains text-lg md:text-2xl font-light">
              My name is Jonathan Tiago and i'm Front-End Dev & Designer.
            </h3>
            <div className="flex gap-2 items-center">
              <a href="mailto:asimplekreative@gmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="transparent"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  className="mailing w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/jonathantiiago/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#eeeeee"
                  className="instagram w-5 h-5"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-screen snap-start bg-backgroundtwo flex justify-center items-center">
          <div className="w-[960px]">
            <h1 class="text-2xl">About</h1>
            <p>
              I'm a 33 years-old Brazilian front-end designer and developer who
              cares about design and 3d. After graduating from the Many Schools
              of Life, i worked in agencies like{" "}
              <a
                href="https://www.autorama.art.br/"
                target="_blank"
                className="hover:underline"
              >
                Actua Comunicação
              </a>
              , in Brazil, and big companies like{" "}
              <a
                href="http://www.riffel.com.br/"
                target="_blank"
                className="hover:underline"
              >
                Riffel
              </a>
              ,{" "}
              <a
                href="http://www.blukit.com.br/"
                target="_blank"
                className="hover:underline"
              >
                Blukit
              </a>
              ,{" "}
              <a
                href="http://www.roco.com.br/"
                target="_blank"
                className="hover:underline"
              >
                Roco Metalúrgica
              </a>
              ,
              <a
                href="http://www.bgocompany.com.br/"
                target="_blank"
                className="hover:underline"
              >
                BGO Company
              </a>
              ,{" "}
              <a
                href="http://www.deliz.com.br/"
                target="_blank"
                className="hover:underline"
              >
                Deliz Indústria do Vestuário
              </a>
              . I have been working as a freelancer for 7 years. And i have
              total skills of Adode Creative Cloud ♥ and Visual Studio Code ♥ My
              life is Developing & Design & 3D.
            </p>
          </div>
        </div>
        <div className="w-full h-screen snap-start flex justify-center items-center">
          <div className="w-[960px]">
            <h1 class="text-2xl">Selected Works</h1>
            <p>
              <a
                href="http://www.tatifashionmkt.com.br/"
                target="_blank"
                className="hover:underline"
              >
                tati fashion mkt • website
              </a>
            </p>
            <p>
              <a
                href="http://www.clinicaochoa.com.br/"
                target="_blank"
                className="hover:underline"
              >
                clinica ochoa • website
              </a>
            </p>
            <p>
              <a
                href="http://www.clinicaochoa.com.br/"
                target="_blank"
                className="hover:underline"
              >
                smj gestao empresarial • website
              </a>
            </p>
            <p>
              <a
                href="https://www.behance.net/gallery/142740533/CGI-Flange-de-Ar-Condicionado-ROCO"
                target="_blank"
                className="hover:underline"
              >
                flange de ar • 3D dev
              </a>
            </p>
            <p>
              <a
                href="https://www.behance.net/gallery/142740155/CGI-Barra-de-Apoio-Blender"
                target="_blank"
                className="hover:underline"
              >
                barra de apoio • 3D dev
              </a>
            </p>
            <p>
              <a
                href="https://www.behance.net/gallery/142739235/CGI-Valvula-Click-Roco"
                target="_blank"
                className="hover:underline"
              >
                válcula click • 3D dev
              </a>
            </p>
            <p>
              <a
                href="https://www.behance.net/gallery/144126883/Estampas-Desenvolvimento"
                target="_blank"
                className="hover:underline"
              >
                t-shirts random • illustration
              </a>
            </p>
          </div>
        </div>
        <Script>
          {`
          let selectButtonClickMe = document.querySelector('.btnClickMe');
          let selectBody = document.querySelector('body');
          selectButtonClickMe.addEventListener('click', () => {
            selectBody.classList.toggle('lightning')       
          })
        `}
        </Script>
      </main>
    </div>
  );
}
