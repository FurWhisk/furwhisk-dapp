import React from 'react';

const ToggleTheme = ({ dark, setDark }) => {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-sm"
      title="Toggle theme"
    >
      {dark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};

export default ToggleTheme;
