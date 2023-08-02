import React from "react";
import { Button, IconButton, Modal, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { CardBox, DetailsBox, StyledImageBox, StyledModelBox } from "./style";
import { getYear } from "@/utils/Date";
import { sliceText } from "@/utils/GlobalFuntions";
import LazyImage from "../LazyImage";

const SongModal = ({
  isOpen,
  onClose,
  setSong,
}: SongModalType): JSX.Element => {
  const {
    currentSong,
    songAction: { isPlaying },
  } = useSelector(({ song }: { song: SongStoreType }) => song);
  const releseYear = getYear(currentSong?.releaseDate);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="song-model"
      aria-describedby="description-song-details"
    >
      <StyledModelBox>
        <IconButton onClick={onClose}>
          <CloseIcon fontSize="large" />
        </IconButton>
        <CardBox>
          <StyledImageBox>
            <LazyImage
              url={currentSong?.artworkUrl100}
              lowUrl={currentSong?.artworkUrl60}
            />
          </StyledImageBox>
          <DetailsBox>
            <Typography noWrap component="h5" variant="h6" color="#334155">
              {currentSong?.collectionName || currentSong?.artistName}
            </Typography>
            <Typography noWrap component="h4" variant="h5">
              {currentSong?.name ||
                currentSong?.collectionName ||
                currentSong?.artistName}
            </Typography>
            <Typography noWrap sx={{ textAlign: "center" }}>
              {currentSong?.name ||
                currentSong?.collectionName ||
                currentSong?.artistName}
              <FiberManualRecordIcon fontSize="small" color="info" />
              {releseYear}
            </Typography>
            <Typography>
              Artist : {sliceText(currentSong?.artistName, 25)}
            </Typography>
            <Typography>
              Description :
              {currentSong?.description?.split("<br />")[0] ||
                `This song is released in ${releseYear} and the artist name is ${currentSong?.artistName}`}
            </Typography>
            <Button
              sx={{
                backgroundColor: "#E72C30 !important",
              }}
              onClick={() => {
                setSong(currentSong);
              }}
            >
              {isPlaying ? "Pause" : "Play Song"}
            </Button>
          </DetailsBox>
        </CardBox>
      </StyledModelBox>
    </Modal>
  );
};

export default SongModal;
