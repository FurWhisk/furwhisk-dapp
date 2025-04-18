import React from 'react';

const socials = [
  { name: 'Telegram', icon: '📢', url: 'https://t.me/FurWhisk' },
  { name: 'X', icon: '𝕏', url: 'https://x.com/FurWhisk' },
  { name: 'Discord', icon: '🗨️', url: 'https://discord.gg/your-link' },
  { name: 'YouTube', icon: '▶️', url: 'https://youtube.com/@FurWhisk' },
  { name: 'Instagram', icon: '📸', url: 'https://instagram.com/FurWhisk' },
  { name: 'TikTok', icon: '🎵', url: 'https://tiktok.com/@FurWhisk' },
];

const SocialIcons = () => {
  return (
    <>
      {socials.map(({ name, icon, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-xl hover:scale-110 transition-transform"
          title={name}
        >
          {icon}
        </a>
      ))}
    </>
  );
};

export default SocialIcons;
