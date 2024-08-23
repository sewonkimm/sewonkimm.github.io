import React from "react";
import "./ImageLayout.css";

type Props = {
  src: string;
  description?: string;
};
const ImageLayout = ({ src, description }: Props) => {
  return (
    <div className="root">
      <img src={src} alt={description || ""} />
      {description && <p className="description">{description}</p>}
    </div>
  );
};

export default ImageLayout;
