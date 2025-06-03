//Home.jsx
import React, { useState } from 'react';
import PromptCard from './PromptCard';

export default function Home({ favorites, setFavorites, prompts, setPrompts, currentPrompt, setCurrentPrompt }) {
  const [customPrompt, setCustomPrompt] = useState('');

  const toggleFavorite = (promptText) => {
    if (favorites.includes(promptText)) {
      setFavorites(favorites.filter((fav) => fav !== promptText));
    } else {
      setFavorites([...favorites, promptText]);
    }
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (customPrompt.trim()) {
      const newPrompt = { text: customPrompt };
      const updatedPrompts = [newPrompt, ...prompts];
      setPrompts(updatedPrompts);
      setCurrentPrompt(newPrompt);

      const storedCustomPrompts = JSON.parse(localStorage.getItem('customPrompts')) || [];
      const updatedCustomPrompts = [newPrompt, ...storedCustomPrompts];
      localStorage.setItem('customPrompts', JSON.stringify(updatedCustomPrompts));

      setCustomPrompt('');
    }
  };

  //Generates new random prompt
  const generateRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setCurrentPrompt(prompts[randomIndex]);
  };

  return (
    <div className="home">
      <h1>Mindful Moments - Prompts</h1>
      {/* Simple custom prompt form */}
      <form onSubmit={handleCustomSubmit}>
        <input
          type="text"
          placeholder="Add your own prompt"
          value={customPrompt}
          onChange={(e) => setCustomPrompt(e.target.value)}
        />
    
        <button type="submit">Add</button>
         {/* Button that generates new random prompt */}
        <button onClick={generateRandomPrompt}>New Random Prompt</button>
      </form>


      {currentPrompt && (
        <PromptCard prompt={currentPrompt.text} isFavorite={favorites.includes(currentPrompt.text)} onToggleFavorite={() => toggleFavorite(currentPrompt.text)}/>
      )}
    </div>
  );
}
