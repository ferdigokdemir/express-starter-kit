import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import "reflect-metadata";
import responseTime from "response-time";
import users from "./routes/users";

dotenv.config();

const PORT = process.env.PORT || 4242;

(async () => {
  try {
    mongoose.connect( process.env.MONGO_URI || "", { useNewUrlParser: true });
    const app = express();

    app.use(helmet());
    app.use(express.json());
    app.use(cors());
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(compression());
    app.use(responseTime());

    // Routes
    app.use(users);

    app.listen(PORT);
    console.log("Api started on : http://localhost:" + PORT);
  } catch (error) {
    console.error(error);
  }
})();