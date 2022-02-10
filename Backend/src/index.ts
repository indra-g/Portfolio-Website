import Express, { Application } from "express";
import cors from "cors";
import "dotenv/config";

const app: Application = Express();
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

const port: number | string = process.env.PORT || 4040;
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
