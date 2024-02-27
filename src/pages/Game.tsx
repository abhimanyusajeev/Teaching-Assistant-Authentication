// pages/GamePage.tsx

import React from 'react';
import GameFrame from '../components/GameFrame';

const GamePage: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <GameFrame />
        </div>
    );
};

export default GamePage;
