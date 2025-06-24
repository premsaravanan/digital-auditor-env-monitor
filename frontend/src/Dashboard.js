import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function Dashboard() {
  const [data, setData] = useState([]);
  const [latest, setLatest] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/history/")
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.error("Error loading history:", err));

    fetch("http://127.0.0.1:8000/latest/")
      .then((res) => res.json())
      .then((d) => setLatest(d))
      .catch((err) => console.error("Error loading latest:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🌡️ Environment Monitoring Dashboard</h2>
      <h4>Temperature Trend (Last 6 Hours)</h4>
      <LineChart
        width={900}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="timestamp" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="red" />
      </LineChart>
      <p><b>Latest Reading:</b> Temperature = {latest?.temperature ?? "--"} °C</p>
    </div>
  );
}

export default Dashboard;
