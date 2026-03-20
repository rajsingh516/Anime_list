import React from 'react';
import Card from '../Card';

function HomeSection() {
  return (
    <section className="section" id="home">
      <h2>Welcome</h2>
      <Card
        title="Track, Discover & Connect"
        links={[
          {
            text: 'Explore More Anime',
            url: 'https://myanimelist.net/',
          },
        ]}
      >
        <p>
          Monitor your watching progress, explore AI-powered recommendations, and
          interact with other fans via clubs and polls. Built for anime & TV lovers!
        </p>
      </Card>
    </section>
  );
}

export default HomeSection;
