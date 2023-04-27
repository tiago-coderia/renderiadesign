import React from "react";
import Button from "../Buttons/primary";

const Contact = () => {
  return (
    <div className="text-center flex flex-col items-center gap-4 border-b-[1px] pb-10 border-default  border-opacity-10">
      <h1 className="text-gradient text-5xl font-semibold leading-normal text-center">
        Tell me about <br />
        your next project!
      </h1>
      <span className="text-4xl animate-pulse">😀</span>
      <Button endereco="mailto:tiago.coderia@gmail.com">
        <div className="flex items-center gap-4">
          Get in Touch
          <ion-icon name="mail-unread-outline"></ion-icon>
        </div>
      </Button>
    </div>
  );
};
export default Contact;
