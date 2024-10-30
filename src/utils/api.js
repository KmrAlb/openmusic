// utils/api.js
import axios from 'axios';

const API_KEY = 'YOUR_YOUTUBE_API_KEY';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const searchVideos = async (query) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: 'snippet',
      maxResults: 10,
      q: query,
      type: 'video',
      key: API_KEY,
    },
  });
  return response.data.items;
};

export const getVideoDetails = async (videoId) => {
  const response = await axios.get(`${BASE_URL}/videos`, {
    params: {
      part: 'snippet,contentDetails',
      id: videoId,
      key: API_KEY,
    },
  });
  return response.data.items[0];
};
