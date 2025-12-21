import { useState, useEffect } from 'react';
import VideoCard from '../components/VideoCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { getTrendingVideos } from '../utils/youtubeApi';

const TrendingPage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getTrendingVideos(20);
        setVideos(data);
      } catch (err) {
        setError('Failed to load trending videos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Trending</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default TrendingPage;