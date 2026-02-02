import React from "react";
import TelegramLogin from "../components/TelegramLogin";
import { Bot, Zap, Users, MessageSquare, Shield, BarChart, Settings, Globe } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl">
            <Bot className="w-12 h-12" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to <span className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">PulsePointBot</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          A powerful Telegram bot that helps you manage communities, automate tasks, and engage with members seamlessly.
        </p>

        {/* Login Card */}
        <div className="max-w-md mx-auto mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
            <p className="text-gray-400 mb-6">
              Login with Telegram to manage your community
            </p>
            
            <div className="mb-4">
              <TelegramLogin />
            </div>
            
            <p className="text-sm text-gray-500">
              Secure authentication via Telegram
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-gray-900/50 to-gray-900/30 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Community Management Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-blue-500/30 transition hover:scale-[1.02]">
              <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Member Management</h3>
              <p className="text-gray-400">
                Welcome new members, manage roles, and monitor community activity
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-green-500/30 transition hover:scale-[1.02]">
              <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Responses</h3>
              <p className="text-gray-400">
                Set up auto-replies, scheduled messages, and interactive commands
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-purple-500/30 transition hover:scale-[1.02]">
              <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Moderation Tools</h3>
              <p className="text-gray-400">
                Keep your community safe with spam filters, warning systems, and ban management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-blue-400">500+</div>
            <div className="text-gray-400">Communities</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-green-400">50K+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-purple-400">99.8%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-teal-400">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-2xl p-8 border border-blue-500/30 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Manage Your Community?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Add PulsePointBot to your Telegram group and streamline community management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/PulsePointBot_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-600 transition flex items-center justify-center space-x-2"
            >
              <Globe className="w-5 h-5" />
              <span>Add to Telegram</span>
            </a>
            <a
              href="/dashboard"
              className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg border border-gray-700 hover:bg-gray-700 transition"
            >
              Open Dashboard
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 w-8 h-8 rounded-lg flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <span className="text-xl font-semibold">PulsePointBot</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="/settings"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition"
              >
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </a>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-400">Powered by Telegram API</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-gray-800/50">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} PulsePointBot • Made with ❤️ for Telegram communities
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Telegram Bot for community management, announcements, and automation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;