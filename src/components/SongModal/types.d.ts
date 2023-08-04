interface SongModalType {
  isOpen: boolean;
  onClose: () => void;
  setSong: (song: Song) => void;
}
