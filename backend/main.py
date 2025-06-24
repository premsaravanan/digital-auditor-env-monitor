from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from typing import List, Optional

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SensorData(BaseModel):
    temperature: float
    humidity: float
    co2: int
    timestamp: Optional[datetime] = datetime.utcnow()

sensor_data_db: List[dict] = []

@app.post("/sensor-data/")
def receive_data(data: SensorData):
    data_dict = data.dict()
    data_dict["anomaly"] = data.temperature > 100 or data.co2 > 1000
    sensor_data_db.append(data_dict)
    return {"message": "Data received", "anomaly": data_dict["anomaly"]}

@app.get("/latest/")
def get_latest_data():
    if not sensor_data_db:
        raise HTTPException(status_code=404, detail="No data found.")
    return sensor_data_db[-1]

@app.get("/history/")
def get_history():
    return sensor_data_db
