"use client";

import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LazyImage from "../LazyImage";
import { StyledDetailsBox, StyledImageBox, StyledRootBox } from "./style";
import { useSelector } from "react-redux";
import { setCurrentSong, setPlay } from "@/src/reducers/SongReducer";
import store from "@/src/ducks/store";

const SongCard = (props: CardPropType): JSX.Element => {
  const {
    currentSong,
    songAction: { isPlaying },
  } = useSelector(({ song }: { song: SongStoreType }) => song);

  const { song } = props;
  const dispatch = store.dispatch;
  const songIsPlaying =
    isPlaying && currentSong?.previewUrl === song?.previewUrl;

  const setSong = (song: Song): void => {
    if (currentSong?.previewUrl === song?.previewUrl) {
      dispatch(setPlay({ isPlaying: !isPlaying }));
    } else {
      dispatch(setCurrentSong({ currentSong: song }));
      dispatch(setPlay({ isPlaying: true }));
    }
  };

  return (
    <StyledRootBox
      data-testid="card"
      onClick={() => {
        setSong(song);
      }}
    >
      <StyledImageBox>
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
        <Box sx={{ alignSelf: "center" }}>
          {songIsPlaying ? (
            <IconButton
              data-testid="pause-button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSong(song);
              }}
            >
              <PauseIcon />
            </IconButton>
          ) : (
            <IconButton
              data-testid="play-button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSong(song);
              }}
            >
              <PlayArrowIcon />
            </IconButton>
          )}
          <IconButton>
            <FavoriteBorderIcon data-testid="like-button" />
          </IconButton>
        </Box>
      </StyledDetailsBox>
    </StyledRootBox>
  );
};

export default SongCard;
