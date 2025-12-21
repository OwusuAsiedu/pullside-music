import { useState, useEffect } from 'react';
import VideoCard from '../components/VideoCard';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { searchVideos, getTrendingVideos } from '../utils/youtubeApi';

const HomePage = () => {
  const [featuredVideos, setFeaturedVideos] = useState([]);
  const [trendingVideos, setTrendingVideos] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const [featured, trending] = await Promise.all([
          searchVideos('hip hop new releases', 5),
          getTrendingVideos(5)
        ]);
        setFeaturedVideos(featured);
        setTrendingVideos(trending);
      } catch (err) {
        setError('Failed to load videos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleSearch = async (query) => {
    setIsSearching(true);
    setError(null);
    try {
      const results = await searchVideos(`${query} hip hop`, 20);
      setSearchResults(results);
    } catch (err) {
      setError('Failed to search videos. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  if (loading) return <Loader />;
  if (error && !isSearching) return <ErrorMessage message={error} />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Welcome to Pullside Music</h1>

      <SearchBar onSearch={handleSearch} />

      {isSearching && <Loader />}

      {searchResults.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.map((video) => (
              <VideoCard key={video.id.videoId} video={video} />
            ))}
          </div>
        </section>
      )}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredVideos.map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendingVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;