import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Headphones, Settings, Users, Home, Shield, Music } from "lucide-react";

interface HeaderProps {
  isAdmin: boolean;
  isLoggedIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAdmin, isLoggedIn = false }) => {
  return (
    <header className="w-full bg-gradient-to-r from-gray-900 to-black border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo / Title */}
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-10 h-10 rounded-xl flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              PulsePointBot
            </h1>
            <p className="text-xs text-gray-400">Discord Music Bot</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <a
            href="/"
            className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </a>

          {isLoggedIn && (
            <a
              href="/dashboard"
              className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition"
            >
              <Headphones className="w-4 h-4" />
              <span>Dashboard</span>
            </a>
          )}

          {isAdmin && (
            <a
              href="/admin"
              className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition"
            >
              <Shield className="w-4 h-4" />
              <span>Admin</span>
            </a>
          )}

          {isLoggedIn && (
            <a
              href="/settings"
              className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition"
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </a>
          )}

          {!isLoggedIn && (
            <a
              href="/login"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition"
            >
              <Users className="w-4 h-4" />
              <span>Login</span>
            </a>
          )}

          <div className="ml-2">
            <DarkModeToggle />
          </div>
        </nav>
      </div>

      {/* Optional Status Bar */}
      {isLoggedIn && (
        <div className="bg-gray-800/50 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Bot Online</span>
              </div>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400">24 Servers Active</span>
            </div>
            <div className="text-gray-400">
              Uptime: <span className="text-green-400">99.8%</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
