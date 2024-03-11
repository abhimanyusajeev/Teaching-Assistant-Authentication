// pages/Videos.tsx

import Head from 'next/head';
import { useEffect, useState } from 'react';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // You can replace this with your video data fetching logic
    const fetchVideos = async () => {
      try {
        // Simulating video data
        const videoData = [
          {
            id: 'video1',
            title: '',
            thumbnail: 'https://th.bing.com/th/id/OIP.QQDsa1sN691Ce3augosRYAHaE7?rs=1&pid=ImgDetMain',
            link: 'https://youtu.be/4SNdy7q6b8g?si=lcpQDNxMEZqMbqWb',
          },
          {
            id: 'video2',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/Y-QKHyjdXLE/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=R2frjzrC5Jg',
          },
          {
            id: 'video3',
            title: '',
            thumbnail: 'https://th.bing.com/th/id/OIP.KF62XGiJxJFUOIzz6G9uOQHaEK?rs=1&pid=ImgDetMain',
            link: 'https://www.youtube.com/watch?v=ChqnN3cKzXQ',
          },
          {
            id: 'video4',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/pS1wjXCHLNY/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=WP1blVh1ZQM',
          },
          {
            id: 'video5',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/EiFj-NTXOdc/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=draRzWLZ784',
          },
          {
            id: 'video2',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/Y-QKHyjdXLE/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=R2frjzrC5Jg',
          },
          {
            id: 'video2',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/Y-QKHyjdXLE/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=R2frjzrC5Jg',
          },
          {
            id: 'video2',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/Y-QKHyjdXLE/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=R2frjzrC5Jg',
          },
          {
            id: 'video4',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/pS1wjXCHLNY/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=WP1blVh1ZQM',
          },
          {
            id: 'video4',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/pS1wjXCHLNY/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=WP1blVh1ZQM',
          },
          {
            id: 'video5',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/EiFj-NTXOdc/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=draRzWLZ784',
          },
          {
            id: 'video2',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/Y-QKHyjdXLE/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=R2frjzrC5Jg',
          },
          {
            id: 'video2',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/Y-QKHyjdXLE/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=R2frjzrC5Jg',
          },
          {
            id: 'video5',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/EiFj-NTXOdc/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=draRzWLZ784',
          },
          {
            id: 'video4',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/pS1wjXCHLNY/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=WP1blVh1ZQM',
          },
          {
            id: 'video5',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/EiFj-NTXOdc/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=draRzWLZ784',
          },
          {
            id: 'video2',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/Y-QKHyjdXLE/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=R2frjzrC5Jg',
          },
          {
            id: 'video4',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/pS1wjXCHLNY/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=WP1blVh1ZQM',
          },
          {
            id: 'video2',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/Y-QKHyjdXLE/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=R2frjzrC5Jg',
          },
          {
            id: 'video2',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/Y-QKHyjdXLE/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=R2frjzrC5Jg',
          },
          {
            id: 'video5',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/EiFj-NTXOdc/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=draRzWLZ784',
          },
          {
            id: 'video2',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/Y-QKHyjdXLE/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=R2frjzrC5Jg',
          },
          {
            id: 'video4',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/pS1wjXCHLNY/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=WP1blVh1ZQM',
          }, {
            id: 'video4',
            title: '',
            thumbnail: 'https://i.ytimg.com/vi/pS1wjXCHLNY/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=WP1blVh1ZQM',
          },

          // Add more video data as needed
        ];
        setVideos(videoData);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <Head>
        <title>PROUNCIATION VIDEOS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold mb-5"></h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {videos.map((video) => (
          <a key={video.id} href={video.link} target="_blank" rel="noopener noreferrer">
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-auto"
              />
              <h2 className="text-lg font-medium mt-2 px-2">{video.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Videos;
