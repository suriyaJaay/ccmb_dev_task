# ccmb_dev_task

App setup requirement

- Node.js latest
- Angular v21 
- Free version of Finnhub API - update the key if you want in backend/.env 

Project Folder Structure
/backend      
/ui     



1. Clone the repository
git clone https://github.com/suriyaJaay/ccmb_dev_task.git
cd ccmb_dev_task


2. Install dependencies
For UI:
cd ui
npm install


For backend:
cd ../backend
npm install


3. Update .env file
- In /backend/.env, add latest Finnhub API key: FINHUB_API_KEY=YOUR_NEW_KEY

- Both in UI / backend 
    comment out below stocks which was test for dev
        predefinedStocks = [
            'BINANCE:BTCUSDT',
            'BINANCE:ETHUSDT',
            'BINANCE:BNBUSDT',
            'BINANCE:XRPUSDT',
            'BINANCE:ADAUSDT',
        ];

- Uncomment below stocks - based on time zone
    predefinedStocks = ['AMZN', 'META', 'NVDA', 'NFLX', 'INTC', "AMZN", "META", "NVDA", "NFLX", "INTC"];


4. To start both app > Run > npm run start
    - concurrently package used

5. Open http://localhost:4200 in your browser [**** in-cognito mode ***]


