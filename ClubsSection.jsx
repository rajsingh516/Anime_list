import React from 'react';
import Card from '../Card';

function ClubsSection() {
  const clubs = [
    {
      title: '🌌 Sci-Fi Club',
      description:
        'Discuss futuristic themes, parallel universes, and cyberpunk anime.',
      links: [
        {
          text: 'Join Sci-Fi Community',
          url: 'https://www.reddit.com/r/scifi/',
        },
      ],
    },
    {
      title: '🔥 Shounen Legends',
      description:
        'Join Naruto, DBZ, One Piece, and more action-packed anime fandoms.',
      links: [
        {
          text: 'Join Shounen Community',
          url: 'https://www.reddit.com/r/anime/',
        },
      ],
    },
  ];

  return (
    <section className="section" id="clubs">
      <h2>Community Clubs</h2>
      <div className="card-container">
        {clubs.map((club, index) => (
          <Card key={index} title={club.title} links={club.links}>
            <p>{club.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ClubsSection;
