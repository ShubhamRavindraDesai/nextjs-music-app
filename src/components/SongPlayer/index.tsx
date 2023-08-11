"use client";

import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { StyledBox, StyledRootBox, StyledVolumeButtonBox } from "./style";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { sliceText } from "@/src/utils/GlobalFuntions";
import CustomSlider from "@/src/components/atoms/Slider";

const SongPlayer = (props: SongPlayerProps): JSX.Element => {
  const {
    currentSong,
    volume,
    handlePrevButtonClick,
    togglePlay,
    isPlaying,
    handleNextButtonClick,
    trackTime,
    handleTrackChange,
    handleVolumeChange,
    toggleVolume,
    audioRef,
    updateTime,
  } = props;

  return (
    <StyledRootBox data-testid="song-player-root">
      <StyledBox>
        <Box
          data-testid="details"
          display={"flex"}
          alignItems={"center"}
          gap="20px"
          width={"40%"}
        >
          <CardMedia
            data-testid="image"
            component="img"
            sx={{
              width: "50px !important",
              height: "50px !important",
              borderRadius: "10px",
              objectFit: "fill !important",
            }}
            image={currentSong?.artworkUrl100}
            alt="S"
          ></CardMedia>
          <Typography data-testid="song-name">
            {sliceText(currentSong?.name || currentSong?.artistName)}
          </Typography>
        </Box>

        <Box
          data-testid="controls"
          sx={{
            display: "flex",
            flexDirection: "column",
            "@media (max-width: 700px)": {
              flexDirection: "row",
              alignItems: "center",
            },
            width: "60%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <IconButton
              data-testid="prev-button"
              onClick={handlePrevButtonClick}
            >
              <SkipPreviousIcon />
            </IconButton>
            <IconButton
              data-testid="play-button"
              onClick={togglePlay}
              size={"small"}
              sx={{
                backgroundColor: "#E72C30 !important",
                color: "#ffffff",
              }}
            >
              {isPlaying ? (
                <PauseIcon data-testid="pause-icon" />
              ) : (
                <PlayArrowIcon data-testid="play-icon" />
              )}
            </IconButton>
            <IconButton
              data-testid="next-button"
              onClick={handleNextButtonClick}
            >
              <SkipNextIcon />
            </IconButton>
          </Box>
          <CustomSlider
            dataTestId="track-slider"
            size="small"
            style={{ width: "70%" }}
            value={Number(trackTime)}
            onChange={(_: Event, newValue: number | number[]) => {
              handleTrackChange(newValue);
            }}
            min={0}
            max={100}
            ariaLabel="Track slider"
          />
        </Box>
      </StyledBox>
      <StyledVolumeButtonBox data-testid="volume-box">
        {volume <= 0 ? (
          <VolumeOffIcon onClick={toggleVolume} />
        ) : (
          <VolumeUpIcon sx={{ cursor: "pointer" }} onClick={toggleVolume} />
        )}
        <CustomSlider
          size="small"
          style={{ width: "70%", color: "#0c4a6e" }}
          value={volume}
          onChange={(_, newValue) => {
            handleVolumeChange(newValue as number);
          }}
          min={0}
          max={100}
          ariaLabel="Volume slider"
          dataTestId={"volume-slider"}
        />
      </StyledVolumeButtonBox>
      <audio
        data-testid="audio-el"
        ref={audioRef}
        src={currentSong?.previewUrl || ""}
        onTimeUpdate={updateTime}
      />
    </StyledRootBox>
  );
};

export default SongPlayer;
