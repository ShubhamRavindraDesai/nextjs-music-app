import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LazyImage from "../LazyImage";
import { StyledDetailsBox, StyledImageBox, StyledRootBox } from "./style";

const SongCard = (props: CardPropType): JSX.Element => {
  const { songIsPlaying, togglePlay, song } = props;
  return (
    <StyledRootBox data-testid="card">
      <StyledImageBox>
        <CardMedia data-testid="image" component="img" src={song.previewUrl} />
        <LazyImage url={song?.artworkUrl100} lowUrl={song?.artworkUrl60} />
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
            <IconButton data-testid="pause-button" onClick={togglePlay}>
              <PauseIcon />
            </IconButton>
          ) : (
            <IconButton data-testid="play-button" onClick={togglePlay}>
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
