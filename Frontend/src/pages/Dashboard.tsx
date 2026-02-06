import React from 'react';
import { Link } from 'react-router-dom';

const DashboardUI: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back, John!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Info Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Account Information</h2>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-500">Name</label>
              <p className="font-medium">John Doe</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Email</label>
              <p className="font-medium">john.doe@example.com</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Telegram Status</label>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <p className="font-medium">Not Linked</p>
              </div>
            </div>
          </div>
        </div>

        {/* Telegram Connection Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Telegram Connection</h2>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-800">⚠️ Telegram account not connected</p>
              <p className="text-sm text-yellow-600 mt-1">
                Link your Telegram to unlock all features
              </p>
            </div>
            <Link
              to="/link-account"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Link Telegram Account
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
              <h3 className="font-medium">Send Message</h3>
              <p className="text-sm text-gray-500">Send a message through bot</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
              <h3 className="font-medium">View Analytics</h3>
              <p className="text-sm text-gray-500">Check your activity stats</p>
            </button>
            <Link
              to="/link-account"
              className="p-4 border rounded-lg hover:bg-gray-50 text-left"
            >
              <h3 className="font-medium">Manage Connection</h3>
              <p className="text-sm text-gray-500">Update Telegram settings</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUI;
