import { useEffect, useRef, useState } from 'react';
import { useUser } from '../context/UserContext';

export const Editor = () => {
  const { username } = useUser();
  const editorRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState('');
  const [userMap, setUserMap] = useState<Record<string, string>>({});

  useEffect(() => {
    const channel = new BroadcastChannel('collab-editor');

    const sendUpdate = () => {
      channel.postMessage({ type: 'content', content, from: username });
    };

    const handleInput = () => {
      const newContent = editorRef.current?.innerText || '';
      setContent(newContent);
      sendUpdate();
    };

    editorRef.current?.addEventListener('input', handleInput);

    channel.postMessage({ type: 'join', from: username });

    channel.onmessage = (e) => {
      const { type, content: incomingContent, from } = e.data;
      if (from === username) return;

      if (type === 'join') {
        setUserMap((prev) => ({ ...prev, [from]: getRandomColor() }));
      } else if (type === 'content') {
        setContent(incomingContent);
        if (editorRef.current) editorRef.current.innerText = incomingContent;
      }
    };

    return () => {
      channel.close();
    };
  }, [username, content]);

  return (
    <div className="p-4">
      <div className="text-gray-600 mb-2">Logged in as <span className="font-bold">{username}</span></div>
      <div
        ref={editorRef}
        contentEditable
        className="border border-gray-300 p-4 min-h-[200px] rounded bg-white shadow"
        suppressContentEditableWarning
      >
        {content}
      </div>
      <div className="mt-4 text-sm text-gray-500">
        Connected users:
        <ul>
          {Object.entries(userMap).map(([user, color]) => (
            <li key={user} style={{ color }}>
              {user}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const getRandomColor = () => {
  const colors = ['red', 'blue', 'green', 'orange', 'purple'];
  return colors[Math.floor(Math.random() * colors.length)];
};
