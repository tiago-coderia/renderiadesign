import Head from 'next/head'

export default function Home() {
  return (
      <div className='flex items-center justify-center w-screen h-auto md:h-screen my-5 lg:my-auto'>
        <Head>
          <title>asimplekreative.</title>
          <meta name="description" content="designer by Hawkzera" />
          <link rel="icon" href="/favicon.svg" />
          <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;500&display=swap" rel="stylesheet"></link>
        </Head>
        <main className='flex flex-col gap-5'>
          <div className='text-center mx-10'>
            <h1 className='font-JetBrains text-3xl md:text-3xl font-bold' >Hello world!</h1>
            <h3 className='font-JetBrains text-lg md:text-2xl font-light' >My name is Jonathan Tiago</h3>
          </div>
          <div className='mx-10 max-w-[600px]'>
            I'm a 33 years-old Brazilian front-end designer and developer who cares about design and 3d.
            After graduating from the Many Schools of Life, i worked in agencies like <a href="https://www.autorama.art.br/" target='_blank' className='hover:underline'>Actua Comunicação</a>, in Brazil,
            and big companies like <a href="http://www.riffel.com.br/" target='_blank' className='hover:underline'>Riffel</a>, <a href="http://www.blukit.com.br/" target='_blank' className='hover:underline'>Blukit</a>, <a href="http://www.roco.com.br/" target='_blank' className='hover:underline'>Roco Metalúrgica</a>,<a href="http://www.bgocompany.com.br/" target='_blank' className='hover:underline'>BGO Company</a>, <a href="http://www.deliz.com.br/" target='_blank' className='hover:underline'>Deliz Indústria do Vestuário</a>. I have been working as a freelancer for 7 years.
            And i have total skills of Adode Creative Cloud ♥ and Visual Studio Code ♥ My life is Developing & Design & 3D.
          </div>
          <div className='mx-10'>
            <p className='font-bold'>selected works:</p>
            <p><a href="http://www.tatifashionmkt.com.br/" target="_blank" className='hover:underline'>tati fashion mkt • website</a></p>
            <p><a href="http://www.clinicaochoa.com.br/" target="_blank" className='hover:underline'>clinica ochoa • website</a></p>
            <p><a href="http://www.clinicaochoa.com.br/" target="_blank" className='hover:underline'>smj gestao empresarial • website</a></p>
            <p><a href="https://www.behance.net/gallery/142740533/CGI-Flange-de-Ar-Condicionado-ROCO" target="_blank" className='hover:underline'>flange de ar • 3D dev</a></p>
            <p><a href="https://www.behance.net/gallery/142740155/CGI-Barra-de-Apoio-Blender" target="_blank" className='hover:underline'>barra de apoio • 3D dev</a></p>
            <p><a href="https://www.behance.net/gallery/142739235/CGI-Valvula-Click-Roco" target="_blank" className='hover:underline'>válcula click • 3D dev</a></p>
            <p><a href="https://www.behance.net/gallery/144126883/Estampas-Desenvolvimento" target="_blank" className='hover:underline'>t-shirts random • illustration</a></p>
          </div>
          <div className="mx-10 flex gap-2 items-center">
          <a href="mailto:asimplekreative@gmail.com"><img src="mail.svg" alt="" width={25}/></a>
          <a href="https://www.linkedin.com/in/jonathantiiago/" target="_blank"><img src="linkedin.svg" alt="" width={20}/></a>
          </div>
        </main>
        <script>
        AOS.init();
        </script>
      </div>
  )
}
