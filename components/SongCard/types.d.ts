interface Song {
  name: string;
  previewUrl: string;
  artworkUrl100: string;
  artworkUrl60: string;
  artistName: string;
  artistId: number | null;
  artistViewUrl: string;
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionId: number | null;
  collectionName: string;
  collectionPrice: number | null;
  collectionViewUrl: string;
  country: string;
  currency: string;
  description: string;
  primaryGenreName: string;
  releaseDate: string;
  trackCount: number | null;
  wrapperType: string;
}

interface CardPropType {
  songIsPlaying: boolean;
  togglePlay: () => void;
  song: Song;
}
