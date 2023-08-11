interface SongPlayerProps {
  currentSong: Song;
  volume: number;
  handlePrevButtonClick: () => void;
  togglePlay: () => void;
  isPlaying: boolean;
  handleNextButtonClick: () => void;
  trackTime: number;
  handleTrackChange: (newValue: number | number[]) => void;
  handleVolumeChange: (newValue: number) => void;
  toggleVolume: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  audioRef: any;
  updateTime: () => void;
}
