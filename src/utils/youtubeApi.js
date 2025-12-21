import axios from 'axios';
import backupVideos from '../data/backupVideos.json';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const searchVideos = async (query, maxResults = 10) => {
  if (!API_KEY) {
    console.warn('YouTube API key not found. Using backup data.');
    return backupVideos.slice(0, maxResults);
  }

  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults,
        key: API_KEY,
        order: 'relevance',
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching videos:', error);
    console.warn('Using backup data due to API error.');
    return backupVideos.slice(0, maxResults);
  }
};

export const getTrendingVideos = async (maxResults = 10) => {
  if (!API_KEY) {
    console.warn('YouTube API key not found. Using backup data.');
    return backupVideos.slice(0, maxResults);
  }

  try {
    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        regionCode: 'US',
        videoCategoryId: '10', // Music category
        maxResults,
        key: API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching trending videos:', error);
    console.warn('Using backup data due to API error.');
    return backupVideos.slice(0, maxResults);
  }
};