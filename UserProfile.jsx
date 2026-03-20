import React from 'react';

function UserProfile({ username }) {
  const avatarUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${username}`;

  return (
    <section className="section profile-section">
      <div className="card profile-card">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="profile-avatar"
        />
        <h3 className="profile-username">{username}</h3>
        <p className="profile-info">
          Favorite Anime: <span className="fav-anime">None</span>
        </p>
      </div>
    </section>
  );
}

export default UserProfile;
