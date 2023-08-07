"use client";

import { Typography } from "@mui/material";
import React from "react";
import LazyImage from "../LazyImage";
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
        <LazyImage url={song?.imageUrl} lowUrl={song?.lowUrl} />
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
