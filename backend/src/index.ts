import { createServer } from "http";
import { initiateWebSockerServer } from "./core/webSocketServer";
import { config } from "dotenv";

config();

const appServer = createServer();

initiateWebSockerServer(appServer);

appServer.listen(process.env.PORT, () => {
  console.log("Websocker server running on port", process.env.PORT);
});
