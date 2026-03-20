import React, { useEffect, useState } from 'react';

function Confetti() {
  const [pieces, setPieces] = useState([]);

  const confettiBurst = () => {
    const newPieces = [];
    for (let i = 0; i < 40; i++) {
      newPieces.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 20,
        color: `hsl(${Math.random() * 360}, 80%, 60%)`,
        delay: Math.random() * 0.5,
      });
    }
    setPieces(newPieces);

    setTimeout(() => setPieces([]), 1400);
  };

  useEffect(() => {
    window.confettiBurst = confettiBurst;
  }, []);

  return (
    <div className="confetti">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.left}vw`,
            top: `${piece.top}vh`,
            background: piece.color,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Confetti;
