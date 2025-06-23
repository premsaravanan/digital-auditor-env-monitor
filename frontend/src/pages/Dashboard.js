
import React from 'react';

function Dashboard() {
  const sampleData = { temperature: 26.5, humidity: 55, location: 'Room A' };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Environment Dashboard</h1>
      <div className="bg-white p-4 rounded shadow">
        <p><strong>Location:</strong> {sampleData.location}</p>
        <p><strong>Temperature:</strong> {sampleData.temperature} °C</p>
        <p><strong>Humidity:</strong> {sampleData.humidity} %</p>
        {sampleData.temperature > 25 && (
          <p className="text-red-600 font-bold">⚠️ Temperature Anomaly Detected!</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
