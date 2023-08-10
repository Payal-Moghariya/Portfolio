import express from "express";
import ejs from "ejs";
// import _ from "lodash";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
})

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
