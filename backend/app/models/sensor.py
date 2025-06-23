
from pydantic import BaseModel

class SensorData(BaseModel):
    temperature: float
    humidity: float
    location: str
    timestamp: str
