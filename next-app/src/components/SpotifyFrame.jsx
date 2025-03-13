export default function SpotifyFrame({ className }) {
  return (
    <iframe
      className={`${className} h-[352px] rounded-2xl`}
      src={`https://open.spotify.com/embed/playlist/0jHbQMs3VVIVkd80y7nmM4?si=75b33e80dd8a4d2e`}
      allow="encrypted-media;"
    ></iframe>
  );
}
