import React from "react";
import TelegramLogin from "../components/TelegramLogin";



const UserDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      <p>Welcome to PulsePointBot 🎵</p>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Login with Telegram</h2>
        <TelegramLogin />
      </div>
    </div>
  );
};

export default UserDashboard;

