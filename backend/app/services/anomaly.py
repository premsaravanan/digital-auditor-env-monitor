
def detect_anomaly(data):
    # Dummy rule: temp > 25 is anomaly
    if data.temperature > 25:
        return True
    return False
