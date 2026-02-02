import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import axios from "axios";

interface AnalyticsData {
  name: string;
  users: number;
}

const AdminPanel: React.FC = () => {
  const [data, setData] = useState<AnalyticsData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://your-backend.com/api/admin/analytics", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Admin Panel Analytics</h2>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="users" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default AdminPanel;
