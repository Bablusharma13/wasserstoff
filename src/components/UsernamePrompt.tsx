import { useState } from 'react';
import { useUser } from '../context/UserContext';

export const UsernamePrompt = () => {
  const { setUsername } = useUser();
  const [nameInput, setNameInput] = useState('');

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        className="border p-2 rounded-md"
        placeholder="Enter your name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setUsername(nameInput.trim())}
        disabled={!nameInput.trim()}
      >
        Join
      </button>
    </div>
  );
};
