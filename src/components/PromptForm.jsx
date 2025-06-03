//PromptForm.jsx
import React, { useState } from 'react';

function PromptForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd({ text });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new mindfulness prompt"
      />
      <button type="submit">Add Prompt</button>
    </form>
  );
}

export default PromptForm;
