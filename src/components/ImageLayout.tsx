import React from "react";
import "./ImageLayout.css";

type Props = {
  src: string;
  description?: string;
  width?: number;
  height?: number;
};
const ImageLayout = ({ src, description, width, height }: Props) => {
  return (
    <div className="root">
      <img src={src} alt={description || ""} width={width} height={height} />
      {description && <p className="description">{description}</p>}
    </div>
  );
};

export default ImageLayout;
