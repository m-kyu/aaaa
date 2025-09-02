import { useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 py-2 bg-gray-50">
        <span className="text-black font-medium">19:02</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
          </div>
          <span className="text-black text-sm ml-2 font-medium">LTE</span>
          <div className="w-6 h-3 bg-black rounded-sm ml-2"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 pt-20">
        {/* Logo */}
        <div className="flex justify-center mb-32">
          <div className="flex items-center">
            <span className="text-4xl font-medium text-black mr-2">Your</span>
            <div className="bg-cyan-300 px-4 py-2 rounded-2xl flex items-center">
              <span className="text-4xl font-medium text-black mr-2">Days</span>
              <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Username Field */}
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-0 py-3 text-base bg-transparent border-0 border-b border-gray-400 placeholder-gray-600 focus:outline-none focus:border-black focus:ring-0"
            />
          </div>

          {/* Password Field */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-0 py-3 text-base bg-transparent border-0 border-b border-gray-400 placeholder-gray-600 focus:outline-none focus:border-black focus:ring-0"
            />
          </div>

          {/* Forgot Password */}
          <div className="pt-4">
            <button className="text-gray-600 text-base hover:text-black transition-colors">
              Forgot password?
            </button>
          </div>

          {/* Buttons */}
          <div className="space-y-4 pt-8">
            <button className="w-full py-4 bg-gray-300 text-black rounded-lg text-base font-medium hover:bg-gray-400 transition-colors">
              Log in
            </button>
            
            <button className="w-full py-4 bg-gray-300 text-black rounded-lg text-base font-medium hover:bg-gray-400 transition-colors">
              Create account
            </button>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center pb-2">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  );
}