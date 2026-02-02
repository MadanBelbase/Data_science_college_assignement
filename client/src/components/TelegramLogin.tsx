import axios from "axios";
import React, { useEffect, useState } from "react";

const BOT_USERNAME = "PulsePointBot_bot";

const TelegramLogin: React.FC = () => {
  const [user, setUser] = useState<any>(() => {
    const saved = localStorage.getItem("tg_user");
    return saved ? JSON.parse(saved) : null;
  });


  const verifyWithBackend = async (tgUser: any) => {
    try {
      const response = await axios.post(
        "http://localhost:5001/auth/telegram",
        tgUser
      );
      if (response.data.success) {
        console.log("User verified by backend:", response.data.user);
        return true;
      } else {
        console.error("Backend verification failed:", response.data.message);
        handleLogout();
        return false;
      }
    } catch (error) {
      console.error("Error verifying user with backend:", error);
      handleLogout();
      return false;
    }
  };

  // Render Telegram Login Widget
  const renderWidget = () => {
    const container = document.getElementById("telegram-login");
    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?15";
    script.async = true;

    script.setAttribute("data-telegram-login", BOT_USERNAME);
    script.setAttribute("data-size", "large");
    script.setAttribute("data-userpic", "true");
    script.setAttribute("data-request-access", "write");
    script.setAttribute("data-onauth", "onTelegramAuth(user)");

    container.appendChild(script);
  };

  const handleLogout = () => {
    localStorage.removeItem("tg_user");
    setUser(null);
  };

  useEffect(() => {
    // Telegram callback
    (window as any).onTelegramAuth = async (tgUser: any) => {
      console.log("Telegram user:", tgUser);

      const verified = await verifyWithBackend(tgUser);

      if (verified) {
        localStorage.setItem("tg_user", JSON.stringify(tgUser));
        setUser(tgUser);
      }
    };

    if (!user) {
      renderWidget();
    }

    return () => {
      delete (window as any).onTelegramAuth;
    };
  }, [user]);

  return (
    <div>
      {!user && <div id="telegram-login" />}

      {user && (
        <div className="mt-4 p-4 border rounded-lg max-w-sm text-center">
          {user.photo_url && (
            <img
              src={user.photo_url}
              alt={user.first_name}
              className="rounded-full w-24 h-24 mx-auto mb-2"
            />
          )}

          <h2 className="text-xl font-bold">
            {user.first_name} {user.last_name || ""}
          </h2>

          {user.username && (
            <a
              href={`https://t.me/${user.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 block"
            >
              @{user.username}
            </a>
          )}

          <button
            onClick={handleLogout}
            className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default TelegramLogin;
