"use client";

import { Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { setSongs } from "@/reducers/SongReducer";

import useScroll from "@/hooks/ScrollHook";
import SongCard from "../SongCard";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "./helper";

const SongsContainer = (): JSX.Element => {
  const {
    songs,
    songAction: { search },
  } = useSelector(({ song }: { song: SongStoreType }) => song);
  const dispatch = useDispatch();

  const [scrollIsLoading, setScrollIsLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [skip, setSkip] = useState<number>(25);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollAdd = async (
    pageNumber: number,
    pageSize: number
  ): Promise<void> => {
    const skipAmount = pageSize * (pageNumber - 1);
    const url = `http://127.0.0.1:3000/api/songs?search=${
      search || "alan walker"
    }&page=${page}&skip=${skipAmount}`;

    const newSongs = await getSongs(
      "http://127.0.0.1:3000/api/songs?search=alan walker&page=1&skip=25" || url
    );
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
  }, [page]);

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
        {songs?.map((song: Song, index: number) => {
          return (
            <Grid key={index} item xs={6} sm={4} md={3} lg={2} width={"100%"}>
              <SongCard key={index} song={song} />
            </Grid>
          );
        })}
        {/* {isLoading && songs?.length ? renderSkelton() : <></>} */}
      </Grid>
      {/* <SongModal isOpen={isOpen} onClose={handleClose} setSong={setSong} /> */}
    </div>
  );
};

export default SongsContainer;

// // "use client";

// import { Grid } from "@mui/material";
// import React from "react";
// // import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// // import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// // import useScroll from "@/hooks/ScrollHook";
// import SongCard from "../SongCard";
// import store from "@/src/ducks/store";
// import { PrismaClient } from "@prisma/client";

// const SongsContainer = (): JSX.Element => {
//   // const {
//   //   songs,
//   //   currentSong,
//   //   songAction: { isPlaying, search },
//   // } = useSelector(({ song }: { song: SongStoreType }) => song);

//   const {
//     songs,
//     currentSong,
//     songAction: { isPlaying, search },
//   } = store.getState().song;

//   // const dispatch = store.dispatch;
//   // const [isLoading, setIsLoading] = useState(false);
//   // const [scrollIsLoading, setScrollIsLoading] = useState(false);
//   // const [offset, setOffset] = useState<number>(1);
//   // const containerRef = useRef<HTMLDivElement>(null);
//   // const [isOpen, setIsOpen] = useState(false);

//   // const setScrollLoading = (loading: boolean): void => {
//   //   setScrollIsLoading(loading);
//   // };
//   // const changeOffset = (): void => {
//   //   setOffset((prev) => {
//   //     return (prev += 25);
//   //   });
//   // };
//   // useScroll({
//   //   isLoading,
//   //   scrollIsLoading,
//   //   setScrollLoading,
//   //   containerRef,
//   //   changeOffset,
//   // });

//   // const handleClose = (): void => {
//   //   setIsOpen(false);
//   // };

//   // const setSong = (song: Song): void => {
//   //   if (currentSong?.previewUrl === song?.previewUrl) {
//   //     dispatch(setPlay({ isPlaying: !isPlaying }));
//   //   } else {
//   //     dispatch(setCurrentSong({ currentSong: song }));
//   //     dispatch(setPlay({ isPlaying: true }));
//   //   }
//   // };

//   // const handleClick = (song: Song): void => {
//   //   // setIsOpen(true);
//   //   setSong(song);
//   // };

//   // useEffect(() => {
//   //   if (offset !== 1 && isLoading) {
//   //     setScrollIsLoading(true);
//   //   } else {
//   //     setScrollIsLoading(false);
//   //   }
//   //   // eslint-disable-next-line
//   // }, [offset]);

//   // useEffect(() => {
//   //   void (async (): Promise<void> => {
//   //     const url = `https://itunes.apple.com/search/?term=${
//   //       search || `alan`
//   //     }&offset=${search ? "" : offset}&limit=${
//   //       search ? 100 : DEFAULT_SONG_REQUEST_LIMIT
//   //     }`;
//   //     setIsLoading(true);
//   //     const newSongs = await getSongs(url);
//   //     setIsLoading(false);

//   //     if (newSongs?.data) {
//   //       const refinedData = refineSongsData(newSongs?.data);
//   //       if (!currentSong?.previewUrl && refinedData?.length) {
//   //         dispatch(setCurrentSong({ currentSong: refinedData[0] }));
//   //       }

//   //       dispatch(setSongs({ songs: refinedData }));
//   //     }
//   //   })();
//   //   // eslint-disable-next-line
//   // }, [search, offset, dispatch]);

//   // const skeletonArray: number[] = new Array(15).fill("");

//   // const renderSkelton = (): JSX.Element[] => {
//   //   return skeletonArray?.map((_: number, index: number) => {
//   //     return (
//   //       <Grid key={index} item xs={6} sm={4} md={3} lg={2} width={"100%"}>
//   //         <Box width={"100%"} borderRadius="10px" boxShadow={BOXSHADOW_1}>
//   //           <Box width={"100%"} height={200}>
//   //             <Skeleton
//   //               variant="rectangular"
//   //               width={"100%"}
//   //               height={"100%"}
//   //               sx={{ borderRadius: "10px" }}
//   //             />
//   //           </Box>
//   //           <Box
//   //             sx={{
//   //               backgroundColor: "#ffffff",
//   //               borderRadius: "0 0 8px 8px",
//   //             }}
//   //           >
//   //             <Skeleton width="60%" />
//   //             <Skeleton width="40%" />
//   //             <IconButton size={"large"}>
//   //               <PlayArrowIcon />
//   //             </IconButton>
//   //             <IconButton size={"large"}>
//   //               <FavoriteBorderIcon />
//   //             </IconButton>
//   //           </Box>
//   //         </Box>
//   //       </Grid>
//   //     );
//   //   });
//   // };

//   // const renderContent = (songs: Song[]): JSX.Element[] => {
//   //   if (isLoading && !songs.length) {
//   //     return renderSkelton();
//   //   } else {
//   //     return songs?.map((song: Song, index: number) => {
//   //       return (
//   //         <Grid key={index} item xs={6} sm={4} md={3} lg={2} width={"100%"}>
//   //           <SongCard
//   //             key={index}
//   //             song={song}
//   //             setSong={setSong}
//   //             onClick={() => {
//   //               handleClick(song);
//   //             }}
//   //             songIsPlaying={
//   //               isPlaying && currentSong?.previewUrl === song?.previewUrl
//   //             }
//   //           />
//   //         </Grid>
//   //       );
//   //     });
//   //   }
//   // };

//   // const prisma = new PrismaClient();
//   // const newSongs = await prisma.song.findMany();
//   console.log("server component", { songs });
//   // store.dispatch(setCurrentSong({ currentSong: newSongs[0] }));
//   // store.dispatch(setSongs({ songs: newSongs }));
//   // if (!currentSong?.previewUrl && newSongs?.length) {
//   //   dispatch(setCurrentSong({ currentSong: newSongs[0] }));
//   // }

//   return (
//     <>
//       <Grid
//         sx={{
//           backgroundColor: "#ffffff",
//           position: "fixed",
//           top: "66px",
//           bottom: "82px",
//           overflow: "auto",
//           padding: "10px",
//         }}
//         container
//         spacing={2}
//       >
//         {songs?.map((song: Song, index: number) => {
//           return (
//             <Grid key={index} item xs={6} sm={4} md={3} lg={2} width={"100%"}>
//               <SongCard
//                 key={index}
//                 song={song}
//                 songIsPlaying={
//                   isPlaying && currentSong?.previewUrl === song?.previewUrl
//                 }
//               />
//             </Grid>
//           );
//         })}
//         {/* {isLoading && songs?.length ? renderSkelton() : <></>} */}
//       </Grid>
//       {/* <SongModal isOpen={isOpen} onClose={handleClose} setSong={setSong} /> */}
//     </>
//   );
// };

// export default SongsContainer;
