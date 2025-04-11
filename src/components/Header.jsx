import React from 'react';

const Header = () => {
  return (
    <div className="w-full px-6 py-10 flex flex-col gap-6 justify-center items-center text-center">
      <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-800">
        Healthify.AI
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-amber-700 max-w-xl">
        AI-powered nutrition advisor with fast and custom diet recommendations. Please fill out the form below to get started.
      </p>
    </div>
  );
};

export default Header;
