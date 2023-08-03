interface Song {
  id: string;
  updatedAt?: string;
  createdAt?: string;
  description: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  lowUrl: string;
  imageUrl: string;
  releaseDate: string;
  trackTimeMillis: number;
  country: string;
  primaryGenreName: string;
  name: string;
  artistName: string;
  artworkUrl100: string;
  artworkUrl10: string;
  artworkUrl60: string;
}

interface CardPropType {
  song: Song;
}
