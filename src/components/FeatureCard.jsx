import React from 'react';

const FeatureCard = ({ title }) => {
  return (
    <div className="bg-gray-100 dark:bg-zinc-800 rounded-xl shadow-md p-4 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        Coming soon...
      </p>
    </div>
  );
};

export default FeatureCard;
