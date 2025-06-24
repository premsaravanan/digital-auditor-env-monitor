import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid
} from "recharts";

function Dashboard() {
  const [trend, setTrend] = useState([]);
  const [latest, setLatest] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const trendRes = await axios.get("http://127.0.0.1:8000/sensor-data/trend");
      const latestRes = await axios.get("http://127.0.0.1:8000/sensor-data/latest");
      setTrend(trendRes.data);
      setLatest(latestRes.data);
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>🌡️ Environment Monitoring Dashboard</h2>
      <p><b>Latest Reading:</b> Temperature = {latest.temperature} °C</p>
      <LineChart width={600} height={300} data={trend}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis domain={[30, 50]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="red" />
      </LineChart>
    </div>
  );
}

export default Dashboard;
