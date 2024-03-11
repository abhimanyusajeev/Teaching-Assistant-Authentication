// pages/GamePage.tsx

import React from 'react';
import PronounciationPage from '../components/PronounciationPage';
import Videos from '../components/PronounciationPage';

const GamePage: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <PronounciationPage />
        </div>
    );
};

export default Videos;