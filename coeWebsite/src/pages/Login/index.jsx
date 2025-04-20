import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#01010a] flex items-center justify-center px-4">
      <div className="relative bg-black p-8 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.6)] border backdrop-blur-md w-full max-w-md flex flex-col items-center space-y-6 z-10">
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-xl text-sm font-medium border-[var(--primary)] border bg-black text-gray-400 hover:bg-gray-700">
            User
          </button>
          <button className="px-4 py-2 rounded-xl text-sm font-medium border-[var(--primary)] border bg-black text-gray-400 hover:bg-gray-700">
            Admin
          </button>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-100 tracking-tight">
          User Login
        </h2>
        <div className="w-full bg-black overflow-hidden border-[var(--primary)] border rounded-2xl">
          <input
            type="text"
            placeholder="Email or Username"
            className="w-full px-4 py-2 bg-transparent text-sm text-gray-200 placeholder-gray-500 focus:outline-none"
          />
        </div>
        <div className="w-full bg-black overflow-hidden border-[var(--primary)] border rounded-2xl">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-transparent text-sm text-gray-200 placeholder-gray-500 focus:outline-none"
          />
        </div>
        <div className="w-full flex justify-between gap-4">
          <button className="w-[48%] py-2 text-gray-100 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 shadow-md text-sm font-medium">
            Login
          </button>
          <button className="w-[48%] py-2 text-gray-100 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 shadow-md text-sm font-medium">
            Sign Up
          </button>
        </div>
        <div className="w-full flex items-center justify-center gap-4">
          <hr className="w-1/3 border-t border-gray-700/50" />
          <span className="text-gray-400 text-sm">or</span>
          <hr className="w-1/3 border-t border-gray-700/50" />
        </div>
        <button className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl bg-gray-800/50 border border-gray-700/40 text-gray-200 hover:bg-gray-700/80 shadow-md text-sm">
          <span style={{ color: 'transparent', background: 'url(https://www.google.com/favicon.ico) no-repeat center', display: 'inline-block', width: '20px', height: '20px' }}></span>
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Index;