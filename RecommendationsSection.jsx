import React from 'react';
import Card from '../Card';

function RecommendationsSection() {
  const recommendations = [
    {
      title: 'Jujutsu Kaisen',
      description:
        'Because you liked Demon Slayer and Attack on Titan.',
      links: [
        {
          text: 'Watch Now',
          url: 'https://www.crunchyroll.com/series/GY5P48XEY/jujutsu-kaisen',
        },
      ],
    },
    {
      title: 'Death Note',
      description: 'Recommended for psychological and thriller fans.',
      links: [
        {
          text: 'Watch Now',
          url: 'https://www.netflix.com/title/70204970',
        },
      ],
    },
  ];

  return (
    <section className="section" id="recommendations">
      <h2>AI Recommendations</h2>
      <div className="card-container">
        {recommendations.map((rec, index) => (
          <Card key={index} title={rec.title} links={rec.links}>
            <p>{rec.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default RecommendationsSection;
