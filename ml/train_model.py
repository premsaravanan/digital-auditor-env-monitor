
from sklearn.ensemble import IsolationForest
import numpy as np
import joblib

# Training data
X_train = np.array([[21.0], [22.0], [22.5], [21.5], [23.0], [24.0]])
model = IsolationForest(contamination=0.1)
model.fit(X_train)

# Save model
joblib.dump(model, "model.joblib")

# Load and predict
model = joblib.load("model.joblib")
test_data = np.array([[26.0]])
pred = model.predict(test_data)

print("Anomaly" if pred[0] == -1 else "Normal")
