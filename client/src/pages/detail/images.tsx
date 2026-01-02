import type { FC } from "react";

interface Props {
  images: string[];
}

const Images: FC<Props> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 gap-6 h-fit">
      {images.map((image, key) => (
        <img src={image} key={key} className="f-wfull h-full object-cover" />
      ))}
    </div>
  );
};

export default Images;
