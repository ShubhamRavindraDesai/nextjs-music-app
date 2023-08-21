"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { StyledDetailsBox, StyledRootBox } from "./style";

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
      <Box data-testid="image">
        <Image
          priority
          data-testid="card-media"
          src={song?.imageUrl}
          alt="Song picture"
          width={500}
          height={200}
          style={{
            maxHeight: "200px",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </Box>
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
