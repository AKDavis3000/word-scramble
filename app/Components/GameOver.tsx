import React from 'react';

export default function GameOver() {
  return (
    <div className="game_over_modal">
      <div className="game_over_content">
        <p className="game_over_p">Game Over</p>
        <button className="play_again">Play Again?</button>
      </div>
    </div>
  );
}
