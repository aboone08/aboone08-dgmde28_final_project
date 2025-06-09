//App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import promptData from './data/prompts.json';

export default function App() {
   // Use React state and localStorage to persist user's favorites
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  });

  const [prompts, setPrompts] = useState(() => {
    const storedCustomPrompts = JSON.parse(localStorage.getItem('customPrompts')) || [];
    return [...storedCustomPrompts, ...promptData];
  });

  const [currentPrompt, setCurrentPrompt] = useState(() => {
    const storedCustomPrompts = JSON.parse(localStorage.getItem('customPrompts')) || [];
    const allPrompts = [...storedCustomPrompts, ...promptData];
    const randomIndex = Math.floor(Math.random() * allPrompts.length);
    return allPrompts[randomIndex];
  });

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="app">
      {/* Navigation links between pages */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link>
      </nav>
      {/* React Router defines which component shows for each URL */}
      <Routes>
        <Route path="/" element={<Home favorites={favorites} setFavorites={setFavorites} prompts={prompts} setPrompts={setPrompts} currentPrompt={currentPrompt} setCurrentPrompt={setCurrentPrompt} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites} />} />
      </Routes>
    </div>
  );
}
