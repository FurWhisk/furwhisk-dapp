import React from 'react';
import ToggleTheme from './ToggleTheme';

const Header = ({ dark, setDark }) => {
  return (
    <header className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-2xl font-bold text-black dark:text-white">
        FurWhisk App
      </h1>
      <ToggleTheme dark={dark} setDark={setDark} />
    </header>
  );
};

export default Header;
