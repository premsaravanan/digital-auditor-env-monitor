
CREATE TABLE env_readings (
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMP NOT NULL,
    sensor_id VARCHAR(100),
    temperature FLOAT,
    humidity FLOAT,
    location VARCHAR(100)
);
