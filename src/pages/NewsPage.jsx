import { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import newsData from '../data/news.json';

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Hip-Hop News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {news.map((item, index) => (
          <NewsCard key={index} news={item} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;