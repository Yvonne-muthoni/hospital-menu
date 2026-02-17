# Hospital Menu - Setup & Run Guide

## Project Structure

**Frontend (React + Vite)**
- Scan QR codes with camera
- View breakfast, lunch, dinner menus by day
- Order placement interface

**Backend (Flask + Python)**
- Serves daily menus (Sunday-Saturday)
- Handles order submissions
- Simple REST API

---

## Backend Setup

### 1. Install Python Dependencies
```bash
cd Backend
pip install -r requirements.txt
```

### 2. Run Flask Server
```bash
python app.py
```
- Server runs on `http://localhost:5000`
- API available at `http://localhost:5000/api`

### 3. Available Endpoints

**GET /api/menu** - Get menu for today
```bash
curl http://localhost:5000/api/menu
```

**GET /api/menu?day=monday** - Get menu for specific day
```bash
curl http://localhost:5000/api/menu?day=monday
```

**POST /api/order** - Submit order
```bash
curl -X POST http://localhost:5000/api/order \
  -H "Content-Type: application/json" \
  -d '{"items": [...], "patient": "John", "ward": "A1"}'
```

---

## Frontend Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
- Frontend runs on `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```

---

## How to Use

### 1. Start Backend
```bash
cd Backend
python app.py
```

### 2. Start Frontend (in new terminal)
```bash
npm run dev
```

### 3. Access Application
- Open `http://localhost:5173` in browser
- Click "Start QR Scanner" or "View Menu Without Scanning"
- Select day of the week to see breakfast, lunch, dinner

---

## Daily Menu Management

Menus are stored in `Backend/daily_menus.json` with structure:
```json
{
  "sunday": [
    { "id": 1, "name": "Tea & Bread", "category": "breakfast", ... },
    ...
  ],
  "monday": [ ... ],
  ...
}
```

**To update menu for a day:**
1. Edit `Backend/daily_menus.json`
2. Backend automatically serves updated menu
3. No redeploy needed!

---

## Features

✅ QR Code Scanner  
✅ Dynamic Daily Menus (Sunday-Saturday)  
✅ Breakfast, Lunch, Dinner Categories  
✅ Order Management  
✅ Responsive UI  
✅ CORS Enabled  

---

## Troubleshooting

**Backend won't start?**
- Check Python 3.7+ is installed
- Run `pip install -r requirements.txt`
- Check port 5000 is not in use

**Frontend won't connect to backend?**
- Ensure backend is running on `http://localhost:5000`
- Check browser console for CORS errors
- Frontend expects `http://localhost:5000/api/menu`

**QR Scanner not working?**
- Grant camera permission when prompted
- Use HTTPS or localhost (browser security)
- Test with sample QR codes

