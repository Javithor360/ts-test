import express from "express";

const app = express();

// EXPRESS CONFIGS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HEADERS CONFIGS
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", (req, res) => {
  res.status(200).json({ res: "page not found xd" });
});

export default app;
