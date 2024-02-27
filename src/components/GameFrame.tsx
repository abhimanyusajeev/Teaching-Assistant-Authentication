import React, { useState } from 'react';

const GameFrame: React.FC = () => {
  const [gameUrl, setGameUrl] = useState<string | null>(null);

  const handleOffroadRaceButtonClick = () => {
    setGameUrl("https://www.onlinegames.io/games/2023/unity2/offroad-rally/index.html");
  };

  const handleJeepRacingButtonClick = () => {
    setGameUrl("https://www.onlinegames.io/games/2023/freezenova.com/jeep-racing/index.html");
  };

  return (
    <div >
      <div >
        <div className="flex flex-col items-center space-y-4 bg-zinc-300 py-10 px-10 rounded-lg">
          <button onClick={handleOffroadRaceButtonClick} className="button">Offroad Race</button>
          <button onClick={handleJeepRacingButtonClick} className="button">jeep-racing</button>

        </div>
      </div>
      {gameUrl && (
        <iframe
          src={gameUrl}
          title="Game"
          className="fixed inset-0 w-full h-full z-10"
          style={{ border: 'none' }}
        />
      )}
    </div>
  );
};

export default GameFrame;

