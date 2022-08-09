import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// import postRoutes from "./routes/posts";
import postRoutes from "./routes/posts.js";

const app = express();
// middleware to use routes
app.use("/posts", postRoutes);

// using body parser to parse the body of the request
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// using cors to allow cross-origin requests
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://prodev:helloworld22@memer-cluster.wit1ao3.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} ��`);
    })
  )
  .catch((err) => console.log(err.message));
