import React from 'react';

function WelcomeMessage({ username }) {
  return (
    <div className="welcome-user">
      Welcome, <span className="welcome-username">{username}</span>! 🎉
    </div>
  );
}

export default WelcomeMessage;
