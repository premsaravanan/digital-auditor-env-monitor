
import React, { useState } from 'react';

function AnomalyAssistant() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleExplainClick = async () => {
    setLoading(true);
    setResponse(null);

    const res = await fetch('http://127.0.0.1:8000/explain-anomaly/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        temperature: 43.2,
        humidity: 56,
        location: 'Room A'
      })
    });

    const data = await res.json();
    setResponse(data);
    setLoading(false);
  };

  return (
    <div style={{ marginTop: '30px', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
      <h3>🧠 GenAI Assistant</h3>
      <p>Ask why an anomaly might have occurred.</p>
      <button onClick={handleExplainClick} style={{ padding: '8px 16px' }}>Explain Anomaly</button>

      {loading && <p>⏳ Loading...</p>}

      {response && (
        <div style={{ marginTop: '10px', background: '#f3f3f3', padding: '10px' }}>
          <p><strong>Explanation:</strong> {response.explanation}</p>
          <p><strong>Suggestion:</strong> {response.suggestion}</p>
        </div>
      )}
    </div>
  );
}

export default AnomalyAssistant;
