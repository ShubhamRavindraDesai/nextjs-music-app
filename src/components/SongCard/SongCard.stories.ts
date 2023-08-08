import type { Meta, StoryObj } from "@storybook/react";
import SongCard from ".";

const meta = {
  title: "Example/SongCard",
  component: SongCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SongCard>;

const song = {
  id: "64c9d621773df1f97cfc7678",
  songId: 22,
  name: " Securing America and Restoring Justice",
  imageUrl:
    "https://is1-ssl.mzstatic.com/image/thumb/Music/4a/5d/59/mzi.gmyalanw.jpg/500x500bb.jpg",
  lowUrl:
    "https://is1-ssl.mzstatic.com/image/thumb/Music/4a/5d/59/mzi.gmyalanw.jpg/10x10bb.jpg",
  previewUrl:
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/6e/32/74/6e3274ca-8ea5-422d-37a2-7e563601bb9f/mzaf_7838580944408178448.std.aac.p.m4a",
  artworkUrl100:
    "https://is1-ssl.mzstatic.com/image/thumb/Music/4a/5d/59/mzi.gmyalanw.jpg/100x100bb.jpg",
  artworkUrl60:
    "https://is1-ssl.mzstatic.com/image/thumb/Music/4a/5d/59/mzi.gmyalanw.jpg/60x60bb.jpg",
  artistName: "John Ashcroft",
  artistViewUrl:
    "https://books.apple.com/us/author/john-ashcroft/id2129029?uo=4",
  collectionCensoredName: "Never Again: Securing America and Restoring Justice",
  collectionName: "Never Again: Securing America and Restoring Justice",
  collectionViewUrl:
    "https://books.apple.com/us/audiobook/never-again-securing-america-and-restoring-justice/id356277590?uo=4",
  country: "USA",
  description:
    "John Ashcroft breaks his silence about historic events that transpired during his term of office as attorney general, including the largest terrorist attack in U.S. history, the enactment and defense of the USA Patriot Act, the Robert Hanssen spy scandal, the execution of Timothy McVeigh, and the recently discovered domestic-surveillance program authorized by President Bush. In this provocative audiobook, listeners will meet the man behind the title and hear his take on the dangers to and within America, and what he did to repair the breaches in our country's security.",
  primaryGenreName: "Biographies & Memoirs",
  releaseDate: "2006-10-09T07:00:00Z",
  trackName: "",
  trackViewUrl: "",
  artworkUrl10: "",
  trackTimeMillis: 0,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const SongCardPrimary: Story = {
  args: { song },
};
