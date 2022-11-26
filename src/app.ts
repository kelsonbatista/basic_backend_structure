import cors from "cors";
import express from "express";
import { StatusCodes } from "http-status-codes";
import corsOptions from "./config/corsOptions";

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "*");
      res.header("Access-Control-Allow-Methods", "*");
      next();
    };
    this.app.use(accessControl);
  }

  public start(PORT: string | number): void {
    this.app.get("/ping", (req, res) => {
      res.status(StatusCodes.OK).send("pong");
    });

    this.app.use(cors(corsOptions));
    this.app.use(express.json());

    this.app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
  }
}

export { App };
