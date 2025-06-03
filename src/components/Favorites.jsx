//Favorites.jsx
import React from 'react';
import PromptCard from './PromptCard';

export default function Favorites({ favorites, setFavorites }) {
//Toggle between favorite and unfavorite for saved prompts
  const toggleFavorite = (prompt) => {
    if (favorites.includes(prompt)) {
      setFavorites(favorites.filter((fav) => fav !== prompt));
    } else {
      setFavorites([...favorites, prompt]);
    }
  };

  return (
    <div>
      <h2>Your Favorite Prompts</h2>
      {/* Displays a PromptCard for each favorite */}
      {favorites.map((fav, index) => (
        <PromptCard
          key={index}
          prompt={fav}
          isFavorite={favorites.includes(fav)}
          onToggleFavorite={() => toggleFavorite(fav)}
        />
      ))}
    </div>
  );
}
