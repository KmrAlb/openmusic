// pages/index.js
import { useState } from 'react';
import { searchVideos } from '../utils/api';

export default function Home() {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [queue, setQueue] = useState([]);

  const handleSearch = async () => {
    const results = await searchVideos(query);
    setVideos(results);
  };

  const addToQueue = (video) => {
    setQueue([...queue, video]);
  };

  return (
    <div>
      <h1>Music Player</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a song..."
      />
      <button onClick={handleSearch}>Search</button>

      <h2>Results</h2>
      <ul>
        {videos.map(video => (
          <li key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <button onClick={() => addToQueue(video)}>Add to Queue</button>
          </li>
        ))}
      </ul>

      <h2>Queue</h2>
      <ul>
        {queue.map((video, index) => (
          <li key={index}>{video.snippet.title}</li>
        ))}
      </ul>
    </div>
  );
}
