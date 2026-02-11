import { WebSocketServer, WebSocket } from "ws";
import { config } from "dotenv";

config();

export function initiateWebSockerServer(socketServer: any) {
  const wss = new WebSocketServer({ server: socketServer });

  wss.on("connection", (client) => {
    const finHubApiResponse = new WebSocket(
      `wss://ws.finnhub.io?token=${process.env.FINHUB_API_KEY}`,
    );
    finHubApiResponse.on("open", () => {
      //  ['AMZN', 'META', 'NVDA', 'NFLX', 'INTC', "AMZN", "META", "NVDA", "NFLX", "INTC"]
      // dev test for with local time > symbol: "BINANCE:BTCUSDT"
      [
        "BINANCE:BTCUSDT",
        "BINANCE:ETHUSDT",
        "BINANCE:BNBUSDT",
        "BINANCE:XRPUSDT",
        "BINANCE:ADAUSDT",
      ].forEach((symbol) => {
        finHubApiResponse.send(JSON.stringify({ type: "subscribe", symbol }));
      });
    });

    finHubApiResponse.on("message", (msg) => {
      client.send(msg.toString());
    });

    client.on("close", () => {
      finHubApiResponse.close();
    });
  });
}
