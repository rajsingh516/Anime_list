import React from 'react';
import Card from '../Card';

function WatchlistSection() {
  const watchlistItems = [
    {
      title: 'Attack on Titan',
      description: 'Season 4 • Episode 5',
      status: '⏳ Pending',
      links: [
        {
          text: 'Watch Now',
          url: 'https://www.crunchyroll.com/series/GYVZQKJMR/attack-on-titan',
        },
        {
          text: 'Details',
          url: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
        },
      ],
    },
    {
      title: 'One Piece',
      description: 'Season 1 • Episode 1080',
      status: '✅ Watching',
      links: [
        {
          text: 'Watch Now',
          url: 'https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece',
        },
        {
          text: 'Details',
          url: 'https://myanimelist.net/anime/21/One_Piece',
        },
      ],
    },
    {
      title: 'Breaking Bad',
      description: 'Completed • All Seasons',
      status: '✅ Finished',
      links: [
        {
          text: 'Watch Now',
          url: 'https://www.netflix.com/title/70143836',
        },
        {
          text: 'Details',
          url: 'https://www.imdb.com/title/tt0903747/',
        },
      ],
    },
  ];

  return (
    <section className="section" id="watchlist">
      <h2>Your Watchlist</h2>
      <div className="card-container">
        {watchlistItems.map((item, index) => (
          <Card key={index} title={item.title} links={item.links}>
            <p>
              {item.description}
              <br />
              Status: {item.status}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default WatchlistSection;
