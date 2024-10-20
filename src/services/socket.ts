import { Server, Socket } from "socket.io";

class SocketService {
  private _io: Server;

  public constructor() {
    this._io = new Server();
  }

  get io() {
    return this._io;
  }

  public initListeners() {
    const io = this._io;

    io.on("connect", (socket: Socket) => {
      console.log("A new user connected: ", socket.id);

      socket.on("message", (message: string) => {
        console.log(`A new message from ${socket.id}: `, message);
        socket.broadcast.emit("message", message);
      });
    });
  }
}

export default SocketService;
