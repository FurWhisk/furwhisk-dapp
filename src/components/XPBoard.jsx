import React from 'react';

const leaderboard = []; // Empty until users complete tasks

const XPBoard = () => {
  if (leaderboard.length === 0) {
    return (
      <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-xl shadow text-center">
        <h2 className="text-xl font-bold mb-2">Top XP Whiskers</h2>
        <p className="text-gray-500 dark:text-gray-400">No whiskers yet... Be the first to earn XP!</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Top XP Whiskers</h2>
      <ul className="space-y-2">
        {leaderboard.map((user, index) => (
          <li
            key={index}
            className="flex justify-between p-2 bg-white dark:bg-zinc-700 rounded-md shadow-sm"
          >
            <span>{user.name}</span>
            <span className="font-bold">{user.xp} XP</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default XPBoard;
