"use client";
import React, { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useDispatch, useSelector } from "react-redux";
import { CardBox, DetailsBox, StyledImageBox, StyledModelBox } from "./style";
import { getYear } from "@/utils/Date";
import { sliceText } from "@/utils/GlobalFuntions";
import LazyImage from "../LazyImage";
import { setCurrentSong, setPlay } from "@/src/reducers/SongReducer";
import { INITIAL_SONG } from "@/src/constants";

const SongModal = ({ song }: SongModalType): JSX.Element => {
  const {
    currentSong,
    songAction: { isPlaying },
  } = useSelector(({ song }: { song: SongStoreType }) => song);
  const releseYear = getYear(song?.releaseDate ?? "");

  const dispatch = useDispatch();
  const setPlaySong = (song: Song): void => {
    if (song?.id === currentSong?.id) {
      dispatch(setPlay({ isPlaying: !isPlaying }));
    } else {
      dispatch(setCurrentSong({ song }));
      dispatch(setPlay({ isPlaying: true }));
    }
  };

  useEffect(() => {
    if (song) {
      dispatch(setCurrentSong({ currentSong: song }));
      dispatch(setPlay({ isPlaying: true }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [song]);

  return (
    <StyledModelBox>
      <CardBox>
        <StyledImageBox>
          <LazyImage url={song?.imageUrl ?? ""} />
        </StyledImageBox>
        <DetailsBox>
          <Typography component="h5" variant="h6" color="#334155">
            {song?.collectionName ?? song?.artistName}
          </Typography>
          <Typography component="h4" variant="h5">
            {song?.name ?? song?.collectionName ?? song?.artistName}
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            {song?.name ?? song?.collectionName ?? song?.artistName}
            <FiberManualRecordIcon fontSize="small" color="info" />
            {releseYear}
          </Typography>
          <Typography>
            Artist : {sliceText(song?.artistName ?? "", 25)}
          </Typography>
          <Typography>
            Description :
            {song?.description?.split("<br />")[0] ??
              `This song is released in ${releseYear} and the artist name is ${song?.artistName}`}
          </Typography>
          <Button
            sx={{
              backgroundColor: "#E72C30 !important",
            }}
            onClick={() => {
              setPlaySong(song ?? INITIAL_SONG);
            }}
          >
            {isPlaying ? "Pause" : "Play Song"}
          </Button>
        </DetailsBox>
      </CardBox>
    </StyledModelBox>
  );
};

export default SongModal;
