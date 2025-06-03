//PromptCard.jsx
import React from 'react';

// Reusable component to display a prompt and favorite button
export default function PromptCard({ prompt, isFavorite, onToggleFavorite }) {
    if (!prompt || typeof prompt !== 'string') return null;

  return (
    <div className="prompt-card">
      <p>{prompt}</p>
      {/* Button toggles favorite status */}
      <button onClick={onToggleFavorite} aria-label="Toggle Favorite">
        {isFavorite ? '★' : '☆'}
      </button>
    </div>
  );
}
