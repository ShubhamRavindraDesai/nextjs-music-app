import { CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";

const LazyImage = ({
  url,
  lowUrl,
}: {
  url: string;
  lowUrl: string;
}): JSX.Element => {
  const [imageData, setImageData] = useState(url);

  useEffect(() => {
    if (lowUrl) {
      setImageData(lowUrl);
      const image = new Image();
      image.src = url;

      image.onload = () => {
        setImageData(url);
      };
    }
  }, [url, lowUrl]);

  return (
    <CardMedia
      data-testid="card-media"
      component={"img"}
      src={imageData}
      alt="S"
      loading="lazy"
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "8px",
        objectFit: "fill !important",
      }}
    />
  );
};

export default LazyImage;
