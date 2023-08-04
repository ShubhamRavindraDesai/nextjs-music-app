interface SongStoreType {
  songs: Song[];
  currentSong: Song;
  songAction: {
    search: string;
    isPlaying: boolean;
  };
}
