"use client";

import SongPlayer from "@/components/SongPlayer";
import store from "@/src/ducks/store";
import { setPlay, setCurrentSong } from "@/src/reducers/SongReducer";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Footer = (): JSX.Element => {
  const {
    songs,
    currentSong,
    songAction: { isPlaying },
  } = useSelector(({ song }: { song: SongStoreType }) => song);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [volume, setVolume] = useState(50);
  const [trackTime, setTrackTime] = useState(0);
  const [firstRender, setFirstRender] = useState(true);
  const dispatch = useDispatch();

  // Functions
  const togglePlayback = (): void => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current?.play()?.catch((error) => {
          // eslint-disable-next-line no-console
          console.log("Autoplay prevented:", error);
        });
      } else if (!isPlaying) {
        audioRef.current?.pause();
      }
    }
  };

  const togglePlay = (): void => {
    if (audioRef.current) {
      if (audioRef.current.paused || !isPlaying) {
        dispatch(setPlay({ isPlaying: true }));
      } else if (!audioRef.current.paused || isPlaying) {
        dispatch(setPlay({ isPlaying: false }));
      }
    }
  };

  const handleVolumeChange = (newValue: number): void => {
    setVolume(newValue);
    if (audioRef.current) {
      audioRef.current.volume = newValue / 100;
    }
  };

  const handleTrackChange = (newValue: number | number[]): void => {
    setTrackTime(Number(newValue ?? newValue[0]));
    if (audioRef?.current) {
      audioRef.current.currentTime = Number(newValue);
    }
  };

  const toggleVolume = (): void => {
    setVolume((volume) => (volume <= 0 ? 50 : 0));
  };

  const handlePrevButtonClick = (): void => {
    const isPrevSong = (song: Song): boolean => song?.id === currentSong?.id;
    const currentSongIndex = songs?.findIndex(isPrevSong);
    const prevSong =
      songs[currentSongIndex > 0 ? currentSongIndex - 1 : songs?.length - 1];
    dispatch(setCurrentSong({ currentSong: prevSong }));
  };

  const handleNextButtonClick = (): void => {
    const isNextSong = (song: Song): boolean => song?.id === currentSong?.id;
    const currentSongIndex = songs?.findIndex(isNextSong);
    const prevSong =
      songs[currentSongIndex < songs.length - 1 ? currentSongIndex + 1 : 0];
    dispatch(setCurrentSong({ currentSong: prevSong }));
  };

  const updateTime = (): void => {
    if (audioRef.current) {
      setTrackTime(Number(audioRef.current?.currentTime));
    }
    if (
      Number(audioRef.current?.currentTime) ===
      Number(audioRef.current?.duration)
    ) {
      handleNextButtonClick();
    }
  };

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else {
      togglePlayback();
    }
    // eslint-disable-next-line
  }, [currentSong?.previewUrl, isPlaying]);

  return (
    <SongPlayer
      currentSong={currentSong}
      volume={volume}
      handlePrevButtonClick={handlePrevButtonClick}
      togglePlay={togglePlay}
      isPlaying={isPlaying}
      handleNextButtonClick={handleNextButtonClick}
      trackTime={trackTime}
      handleTrackChange={handleTrackChange}
      handleVolumeChange={handleVolumeChange}
      toggleVolume={toggleVolume}
      audioRef={audioRef}
      updateTime={updateTime}
    />
  );
};

export default Footer;
