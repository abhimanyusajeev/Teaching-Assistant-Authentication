// pages/Videos.tsx

import Head from 'next/head';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Replace 'YOUR_YOUTUBE_API_KEY' with your actual YouTube API key
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=YOUR_YOUTUBE_API_KEY&part=snippet&type=video&q=programming`
        );

        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <Head>
        <title>YouTube Videos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold mb-5">YouTube Videos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <div key={video.id.videoId} className="border border-gray-300 p-4 rounded-lg">
            <iframe
              className="w-full h-48"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allowFullScreen
              title={video.snippet.title}
            ></iframe>
            <h2 className="text-lg font-medium mt-2">{video.snippet.title}</h2>
            <p className="text-gray-600">{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
