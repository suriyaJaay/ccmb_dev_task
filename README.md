

Real‑time stock dashboard built with Angular v21 (frontend) and Node.js (backend). Streams live quotes from Finnhub WebSocket API and displays them in toggleable stock cards.

🚀 Requirements
- Node.js v18+
- npm (comes with Node)
- Angular CLI v21
- A free Finnhub API key

📂 Project Structure
/backend   → Node.js WebSocket proxy server
/ui        → Angular 21 frontend dashboard



⚙️ Setup Instructions
1. Clone the repository
git clone https://github.com/suriyaJaay/ccmb_dev_task.git
cd ccmb_dev_task


2. Install dependencies
Frontend:
cd ui
npm install


Backend:
cd ../backend
npm install


3. Configure environment
Create or update /backend/.env:
FINNHUB_API_KEY=your_api_key_here


4. Configure stock symbols
In the service file, set predefinedStocks to the tickers you want to test.
For example, US tech stocks:
predefinedStocks = ["AMZN", "META", "NVDA", "NFLX", "INTC"];


For crypto (24/7 dev testing):
predefinedStocks = [
  "BINANCE:BTCUSDT",
  "BINANCE:ETHUSDT",
  "BINANCE:BNBUSDT",
  "BINANCE:XRPUSDT",
  "BINANCE:ADAUSDT"
];


5. Start both apps
From the root folder:
npm run start


This uses the concurrently package to run backend and frontend together.
6. Open the dashboard
Visit:
http://localhost:4200


Use an incognito/private window if caching interferes with updates.

🎯 Features
- Real‑time streaming via WebSocket
- Toggle ON/OFF per card (freeze values when OFF)
- Color‑coded cards (green/red/grey)
- Fancy CSS toggle switch

🕒 Notes
- US stocks update during 7:00 PM – 1:30 AM IST (market hours).
- Crypto pairs update 24/7, useful for testing outside US hours.
