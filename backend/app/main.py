
from fastapi import FastAPI
from app.routes import sensor

app = FastAPI(title="Digital Auditor - Environment Monitoring")

app.include_router(sensor.router)
