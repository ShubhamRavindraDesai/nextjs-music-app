import Image from "next/image";
import React from "react";

const LazyImage = ({ url }: { url: string }): JSX.Element => {
  return (
    <Image
      data-testid="card-media"
      src={url}
      alt="Song picture"
      width={500}
      height={200}
      loading="lazy"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "8px",
      }}
    />
  );
};

export default LazyImage;
