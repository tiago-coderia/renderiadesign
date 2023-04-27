import React from "react";
import Image from "next/image";

const ImageSlider = (props) => {
  return (
    <div className="flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer transition-all duration-500 hover:scale-90">
      <Image
        src={`/dev-${props.icone}.svg`}
        width={140}
        height={140}
        title={props.icone}
      />
    </div>
  );
};
export default ImageSlider;
