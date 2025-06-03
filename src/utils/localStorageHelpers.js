//localStorageHelpers.js
export function saveFavorite(prompt) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push(prompt);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  
  export function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  }
  
  export function addCustomPrompt(prompt) {
    const customPrompts = JSON.parse(localStorage.getItem('customPrompts') || '[]');
    customPrompts.push(prompt);
    localStorage.setItem('customPrompts', JSON.stringify(customPrompts));
  }
