import React from 'react';

const LinkAccountUI: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Link Telegram Account</h1>
        <p className="text-gray-600 mt-2">
          Connect your Telegram account to unlock all features
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Instructions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">How to Link</h2>
          <ol className="space-y-4">
            {["Generate a linking code", "Open Telegram", "Send the code", "Confirm connection"].map((step, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">{index + 1}</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">{step}</p>
                  <p className="text-sm text-gray-500 mt-1">Step {index + 1} description goes here.</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Right Column - Code Box */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Your Connection Status</h2>
          
          {/* Connected Example */}
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-medium text-green-800">Connected!</p>
                  <p className="text-sm text-green-600">@telegram_username</p>
                </div>
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
              Go to Dashboard
            </button>
          </div>

          {/* Linking Code Example */}
          <div className="space-y-6 mt-6">
            <div className="p-6 bg-indigo-50 rounded-lg text-center">
              <p className="text-sm text-indigo-600 mb-2">Your linking code (valid for 10 minutes)</p>
              <div className="text-4xl font-bold text-indigo-900 tracking-wider">123456</div>
              <p className="text-sm text-indigo-500 mt-2">Expires in: 10:00</p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-800">
                ⚠️ Go to Telegram now and send: 
                <code className="block bg-yellow-100 px-3 py-2 rounded mt-2 font-mono">/link 123456</code>
              </p>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700">
                Generate New Code
              </button>
              <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
                Check Status
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bot Info */}
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold mb-3">About Our Telegram Bot</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Once linked, you can use these commands in Telegram:</p>
            <ul className="mt-2 space-y-1">
              <li className="text-sm">
                <code className="bg-gray-100 px-2 py-1 rounded">/me</code> - View your account info
              </li>
              <li className="text-sm">
                <code className="bg-gray-100 px-2 py-1 rounded">/help</code> - Get help with commands
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              Your personal data will be synced between the website and Telegram, 
              allowing for a seamless experience across platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkAccountUI;
