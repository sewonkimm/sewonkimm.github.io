import React from "react";
import styles from "./ImageLayout.module.css";

type Props = {
  src: string;
  description?: string;
  width?: number;
  height?: number;
};
const ImageLayout = ({ src, description, width, height }: Props) => {
  return (
    <div className={styles.root}>
      <img src={src} alt={description || ""} width={width} height={height} loading="lazy" />
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default ImageLayout;
