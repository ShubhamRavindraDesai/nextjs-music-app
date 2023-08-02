"use client";

import { Box, Grid, IconButton, Skeleton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { setCurrentSong, setSongs } from "@/reducers/SongReducer";

import useScroll from "@/hooks/ScrollHook";
import SongCard from "../SongCard";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "./helper";
import { BOXSHADOW_1 } from "@/src/constants";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const SongsContainer = (): JSX.Element => {
  const {
    songs,
    currentSong,
    songAction: { search },
  } = useSelector(({ song }: { song: SongStoreType }) => song);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [scrollIsLoading, setScrollIsLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [skip, setSkip] = useState<number>(25);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollAdd = async (
    pageNumber: number,
    pageSize: number
  ): Promise<void> => {
    const skipAmount = (pageSize += 25);
    const url = `http://127.0.0.1:3000/api/songs?search=${
      search || "term"
    }&page=${page}&skip=${skipAmount}`;
    setIsLoading(true);
    const newSongs = await getSongs(url);
    setIsLoading(false);
    if (!currentSong?.previewUrl) {
      dispatch(setCurrentSong({ currentSong: newSongs.data[0] }));
    }
    dispatch(setSongs({ songs: newSongs.data }));
  };

  const setScrollLoading = (loading: boolean): void => {
    setScrollIsLoading(loading);
  };
  const changeOffset = (): void => {
    setPage((prev) => {
      return (prev += 1);
    });
    setSkip((prev) => {
      return (prev += 25);
    });
  };
  useScroll({
    scrollIsLoading,
    setScrollLoading,
    containerRef,
    changeOffset,
  });
  useEffect(() => {
    setScrollIsLoading(true);
    void scrollAdd(page, skip);
    setScrollIsLoading(false);
    // eslint-disable-next-line
  }, [page, search]);

  const skeletonArray: number[] = new Array(25).fill("");

  const renderSkelton = (): JSX.Element[] => {
    return skeletonArray?.map((_: number, index: number) => {
      return (
        <Grid key={index} item xs={6} sm={4} md={3} lg={2} width={"100%"}>
          <Box width={"100%"} borderRadius="10px" boxShadow={BOXSHADOW_1}>
            <Box width={"100%"} height={200}>
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={"100%"}
                sx={{ borderRadius: "10px" }}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "0 0 8px 8px",
              }}
            >
              <Skeleton width="60%" />
              <Skeleton width="40%" />
              <IconButton size={"large"}>
                <PlayArrowIcon />
              </IconButton>
              <IconButton size={"large"}>
                <FavoriteBorderIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      );
    });
  };

  return (
    <div>
      <Grid
        sx={{
          backgroundColor: "#ffffff",
          position: "fixed",
          top: "66px",
          bottom: "82px",
          overflow: "auto",
          padding: "10px",
        }}
        container
        spacing={2}
        ref={containerRef}
      >
        {isLoading && !songs.length
          ? renderSkelton()
          : songs?.map((song: Song, index: number) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  lg={2}
                  width={"100%"}
                >
                  <SongCard key={index} song={song} />
                </Grid>
              );
            })}
        {isLoading && songs?.length ? renderSkelton() : <></>}
      </Grid>

      {/* <SongModal isOpen={isOpen} onClose={handleClose} setSong={setSong} /> */}
    </div>
  );
};

export default SongsContainer;
