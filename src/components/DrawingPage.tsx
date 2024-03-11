// pages/index.tsx

import { useState } from 'react';

const VideoPlayer = ({ videoSrc }: { videoSrc: string }) => {
    return (
        <div className="mt-5">
            <video controls width="50%" height="50%">
                <source src={videoSrc} type="video/mp4" />
            </video>
        </div>
    );
};

const VideosPage = () => {
    const [currentVideo, setCurrentVideo] = useState<string | null>(null);

    const handleThumbnailClick = (videoSrc: string) => {
        setCurrentVideo(videoSrc === currentVideo ? null : videoSrc);
    };

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-5">Select a Video</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <div>
                    <a href="#" onClick={() => handleThumbnailClick('/draw2.mp4')}>
                        <img
                            src="https://i.ytimg.com/an_webp/I-9UxsWEi2k/mqdefault_6s.webp?du=3000&sqp=CIiiu68G&rs=AOn4CLD1NezbP1EYKbz65shU4gCAvRNTVQ"
                            alt="Thumbnail for Video 1"
                            className="cursor-pointer"
                        />
                    </a>
                </div>
                <div>
                    <a href="#" onClick={() => handleThumbnailClick('/draw3.mp4')}>
                        <img
                            src="https://i.ytimg.com/an_webp/oVZwLW7t1hQ/mqdefault_6s.webp?du=3000&sqp=COz3uq8G&rs=AOn4CLBvvD4XwUe8t49KZMzF7VB-xkHB1w"
                            alt="Thumbnail for Video 2"
                            className="cursor-pointer"
                        />
                    </a>
                </div>
                <div>
                    <a href="#" onClick={() => handleThumbnailClick('/draw4.mp4')}>
                        <img
                            src="https://i.ytimg.com/an_webp/Kg159gNncRg/mqdefault_6s.webp?du=3000&sqp=CMibu68G&rs=AOn4CLAlgeJDLbRVcMTJ5QOAjnvgaaXBeg"
                            alt="Thumbnail for Video 3"
                            className="cursor-pointer"
                        />
                    </a>
                </div>
                <div>
                    <a href="#" onClick={() => handleThumbnailClick('/draw5.mp4')}>
                        <img
                            src="https://i.ytimg.com/an_webp/QtGeB5tu2xU/mqdefault_6s.webp?du=3000&sqp=CL-Yu68G&rs=AOn4CLBQy6pguok-p4S755ZMvsnFTCDIQQ"
                            alt="Thumbnail for Video 4"
                            className="cursor-pointer"
                        />
                    </a>
                </div>
            </div>

            {currentVideo && <VideoPlayer videoSrc={currentVideo} />}

            {/* Embed Sketchpad */}
            <div className="mt-5">
                <iframe src="https://sketch.io/sketchpad/" width="100%" height="500px" frameBorder="0" />
            </div>
        </div>
    );
};

export default VideosPage;
