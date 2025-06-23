
# 🌡️ Digital Auditor for Environment Monitoring (Pharma)

This is a beginner-friendly project for monitoring temperature, humidity, etc., in pharmaceutical manufacturing using AI and automation.

---

## ✅ What You Will Learn
- How to build a web application (frontend in React, backend in Python FastAPI)
- How to use AI for detecting anomalies in environment data
- How to store and manage data with PostgreSQL
- How to deploy to the cloud (AWS)

---

## 🧱 Project Structure
```
digital-auditor-env-monitor/
├── backend/          # FastAPI backend
├── frontend/         # React.js frontend
├── ml/               # AI/ML models
├── db/               # PostgreSQL setup
├── docs/             # Diagrams and Documentation
```

---

## 🧑‍🏫 Step-by-Step Setup Instructions

### 1️⃣ Install Prerequisites
- [Node.js](https://nodejs.org/) (for frontend)
- [Python 3.9+](https://www.python.org/downloads/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Git](https://git-scm.com/)

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/digital-auditor-env-monitor.git
cd digital-auditor-env-monitor
```

### 3️⃣ Setup Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### 4️⃣ Setup Frontend
```bash
cd frontend
npm install
npm start
```

### 5️⃣ Setup Database
Use the script in `db/init.sql` to create tables in PostgreSQL.

### 6️⃣ Train and Test AI Model
```bash
cd ml
python train_model.py
```

---

## 🚀 Deploying to AWS
(Instructions will be in `docs/deployment_aws.md`)

---

## 📊 Features
- Real-time dashboard for temperature and humidity
- Anomaly alerts using ML
- Encrypted audit logs
- Role-based user access

---

## 🤝 Contributing
Fork it, make changes, and submit a Pull Request!

---

## 📜 License
MIT License
