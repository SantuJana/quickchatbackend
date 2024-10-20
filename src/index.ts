import express, { Express, Request, Response } from "express";
import { createServer } from "http";
import SocketService from "./services/socket";

const app: Express = express();
const server = createServer(app);

const socketService = new SocketService();
socketService.io.attach(server);
socketService.initListeners();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, welcome to Quick Chat.");
});

server.listen(5000, () => {
  console.log("App is running on http://localhost:5000");
});

export { server };
