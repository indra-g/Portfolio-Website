import Express, { Application } from "express";
import cors from "cors";
import path from "path";
import "dotenv/config";
import api from "./routes/api";

const app: Application = Express();
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use("/api", api);

app.get("*", (req, res) => {
  res.sendfile(path.join((__dirname = "/../Client/build/index.html")));
});

const port: number | string = process.env.PORT || 4040;
app.listen(port, () => console.log(`Server is running on port: ${port}`));
