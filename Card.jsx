import React from 'react';

function Card({ title, children, links = [], image, description }) {
  return (
    <div className="card">
      {image && (
        <img 
          src={image} 
          alt={title}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '12px',
          }}
        />
      )}
      <h3>{title}</h3>
      {description && (
        <p style={{ fontSize: '0.9rem', marginBottom: '8px', opacity: 0.8 }}>
          {description}
        </p>
      )}
      {children}
      {links.map((link, index) => (
        <a
          key={index}
          className="main-btn"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
}

export default Card;
