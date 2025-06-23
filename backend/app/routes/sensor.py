
from fastapi import APIRouter
from app.models.sensor import SensorData
from app.services.anomaly import detect_anomaly

router = APIRouter()

@router.post("/sensor-data/")
def receive_sensor_data(data: SensorData):
    is_anomaly = detect_anomaly(data)
    return {"received": True, "anomaly": is_anomaly}
