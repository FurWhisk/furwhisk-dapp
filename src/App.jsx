import React, { useState } from 'react';
import Header from './components/Header';
import WalletConnect from './components/WalletConnect';
import ToggleTheme from './components/ToggleTheme';
import SocialIcons from './components/SocialIcons';
import FeatureCard from './components/FeatureCard';
import XPBoard from './components/XPBoard';

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark' : ''}>
      <main className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white transition-all">
        {/* Header */}
        <Header dark={dark} setDark={setDark} />

        {/* Wallet Connect */}
        <WalletConnect />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-500 to-pink-500 h-52 rounded-b-3xl flex flex-col justify-end items-center text-white">
          <img
            src="/src/assets/logo.png"
            alt="Avatar"
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg absolute -bottom-14"
          />
        </section>

        {/* Name + Bio */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold">FurWhisk</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Born from the rooftops of Solana, chasing memes and moonshots.
          </p>
        </div>

        {/* Social Icons */}
        <div className="mt-4 flex justify-center gap-4">
          <SocialIcons />
        </div>

        {/* Buttons */}
        <div className="mt-6 px-4 flex flex-col gap-3">
          <a
            href="https://furwhisk.xyz"
            className="bg-black text-white py-3 rounded-xl text-center font-semibold dark:bg-white dark:text-black"
          >
            Official Website
          </a>
          <FeatureCard title="FurWhisk Generator" />
          <FeatureCard title="World's Greatest Pianist" />
        </div>

        {/* XP Board */}
        <div className="mt-10 px-4">
          <XPBoard />
        </div>
      </main>
    </div>
  );
};

export default App;
