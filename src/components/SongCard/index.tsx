"use client";

import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { StyledDetailsBox, StyledImageBox, StyledRootBox } from "./style";

const SongCard = (props: CardPropType): JSX.Element => {
  const { song, navigate } = props;

  const setSong = (song: Song): void => {
    navigate(`/songs/${song.id}`);
  };

  return (
    <StyledRootBox
      data-testid="card"
      onClick={() => {
        setSong(song);
      }}
    >
      <StyledImageBox data-testid="image">
        <Image
          data-testid="card-media"
          src={song?.imageUrl}
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
      </StyledImageBox>
      <StyledDetailsBox>
        <Typography
          noWrap
          fontSize={"14px"}
          variant="h6"
          padding="5px"
          data-testid="song-name"
        >
          {song?.name || song?.artistName}
        </Typography>
        <Typography
          noWrap
          color="#334155"
          fontSize={"14px"}
          padding="5px"
          data-testid="artist-name"
        >
          Lyrics : {song?.artistName}
        </Typography>
      </StyledDetailsBox>
    </StyledRootBox>
  );
};

export default SongCard;
