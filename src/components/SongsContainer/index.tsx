"use client";

import { Box, Grid, Skeleton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { setCurrentSong, setSongs } from "@/reducers/SongReducer";

import useScroll from "@/hooks/ScrollHook";
import SongCard from "../SongCard";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "./helper";
import { BOXSHADOW_1 } from "@/src/constants";
import toast from "react-hot-toast";
import NoDataFound from "../NoDataFound";
import { useRouter } from "next/navigation";

const SongsContainer = (): JSX.Element => {
  const {
    songs,
    currentSong,
    songAction: { search },
  } = useSelector(({ song }: { song: SongStoreType }) => song);
  const dispatch = useDispatch();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [scrollIsLoading, setScrollIsLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [skip, setSkip] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollAdd = async (
    pageNumber: number,
    pageSize: number
  ): Promise<void> => {
    const url = `/api/songs?search=${search}&page=${page}&skip=${pageSize}`;
    setIsLoading(true);
    const { data, error, message } = await getSongs(url);

    if (error) toast.error(error ?? message);
    setIsLoading(false);
    if (!currentSong?.previewUrl) {
      dispatch(setCurrentSong({ currentSong: data[0] }));
    }
    if (data?.length) {
      dispatch(setSongs({ songs: data }));
    } else {
      toast.error(message);
    }
  };

  const setScrollLoading = (loading: boolean): void => {
    setScrollIsLoading(loading);
  };
  const changeOffset = (): void => {
    setPage(songs?.length / 25 + 1);
    setSkip(page * 25);
  };

  useScroll({
    isLoading,
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
  }, [skip, search]);

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
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <Skeleton width="60%" />
              <Skeleton width="40%" />
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
                  <SongCard
                    navigate={(path: string) => {
                      router.push(path);
                    }}
                    key={index}
                    song={song}
                  />
                </Grid>
              );
            })}
        {isLoading && songs?.length ? renderSkelton() : <></>}
        {!isLoading && !songs?.length ? (
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <NoDataFound />
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
    </div>
  );
};

export default SongsContainer;
