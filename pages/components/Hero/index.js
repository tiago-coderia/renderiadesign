import Head from "next/head";
import Image from "next/image";
import BtnLocal from "../Buttons/local";
import Card from "../Card";

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-8">
      <Image
        src="/profile.jpg"
        width={120}
        height={120}
        className="rounded-full filter grayscale"
      />
      <div className="flex gap-4">
        <p className="text-gradient">Hi, I'm Tiago, from Blumenau - Brazil</p>
        <Image src="/hs.svg" width={20} height={20} className="hshaking" />
      </div>
      <div>
        <h1 className="text-gradient text-[56px] font-outfit leading-[3.8rem] text-center font-semibold">
          Full-Stack Dev &<br />
          Expert Designer.
        </h1>
      </div>
      <BtnLocal endereco="#lastest">Lastest Shots +</BtnLocal>
      <h2 className="text-gradient text-[24px] text-center font-medium">
        Collaborate with brands and <br />
        agencies to create impactful results.
      </h2>
      <div className="grid lg:grid-cols-4 gap-2 md:grid-cols-4 sm:grid-cols-2">
        <Card
          icon="icon-acessibility"
          title="UX & UI"
          description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
        />
        <Card
          icon="icon-webmobile"
          title="Web & Mobile App"
          description="Transforming ideas into exceptional web and mobile app experiences."
        />
        <Card
          icon="icon-designcreative"
          title="Design & Creative"
          description="Crafting visually stunning designs that connect with your audience."
        />
        <Card
          icon="icon-development"
          title="Development"
          description="Bringing your vision to life with the latest technology and design trends."
        />
      </div>
    </div>
  );
};
export default Hero;
