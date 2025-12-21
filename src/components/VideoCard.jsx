const VideoCard = ({ video }) => {
  const embedUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">{video.snippet.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{video.snippet.channelTitle}</p>
      <div className="aspect-w-16 aspect-h-9 mb-2">
        <iframe
          src={embedUrl}
          title={video.snippet.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-48 rounded"
        ></iframe>
      </div>
      <p className="text-xs text-gray-500">{new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
      <div className="mt-2">
        <a href={`https://music.apple.com/search?term=${encodeURIComponent(video.snippet.title)}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-2">Apple Music</a>
        <a href={`https://open.spotify.com/search/${encodeURIComponent(video.snippet.title)}`} target="_blank" rel="noopener noreferrer" className="text-green-500">Spotify</a>
      </div>
    </div>
  );
};

export default VideoCard;