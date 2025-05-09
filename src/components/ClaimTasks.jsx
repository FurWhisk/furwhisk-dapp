import React, { useState } from 'react';
import { db } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const tasks = [
  { name: 'Visit Website', key: 'website', link: 'https://furwhisk.xyz' },
  { name: 'Follow on X', key: 'x', link: 'https://x.com/FurWhisk' },
  { name: 'Join Telegram', key: 'telegram', link: 'https://t.me/FurWhisk' },
  { name: 'Join Discord', key: 'discord', link: 'https://discord.gg/furwhisk' },
  { name: 'Subscribe YouTube', key: 'youtube', link: 'https://youtube.com/@FurWhisk' },
];

// Temp wallet for testing (replace this later with real wallet from WalletConnect)
const TEMP_WALLET = 'demo_wallet_address_123';

const ClaimTasks = () => {
  const [claimed, setClaimed] = useState({});

  const handleClaim = async (taskKey) => {
    const userRef = doc(db, 'xp', TEMP_WALLET);
    const docSnap = await getDoc(userRef);

    let userData = docSnap.exists() ? docSnap.data() : { xp: 0, tasks: {} };

    if (userData.tasks[taskKey]) {
      // Already claimed
      return;
    }

    // Give 10 XP per task (customizable)
    userData.xp += 10;
    userData.tasks[taskKey] = true;

    await setDoc(userRef, userData);
    setClaimed((prev) => ({ ...prev, [taskKey]: true }));
  };

  return (
    <div className="bg-gray-100 dark:bg-zinc-800 p-4 mt-10 rounded-xl">
      <h2 className="text-xl font-bold mb-4">Earn XP by Completing Tasks</h2>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.key}
            className="flex justify-between items-center bg-white dark:bg-zinc-700 px-4 py-3 rounded-md shadow"
          >
            <div className="flex flex-col">
              <span className="font-medium">{task.name}</span>
              <a
                href={task.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-500 underline"
              >
                Open Task
              </a>
            </div>
            <button
              onClick={() => handleClaim(task.key)}
              disabled={claimed[task.key]}
              className={`px-4 py-1 rounded-md font-semibold ${
                claimed[task.key]
                  ? 'bg-green-500 text-white cursor-default'
                  : 'bg-black text-white dark:bg-white dark:text-black'
              }`}
            >
              {claimed[task.key] ? 'Claimed' : 'Claim XP'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClaimTasks;
