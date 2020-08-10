const express = require("express");
const mongoose = require("mongoose");

const items = require("./routes/api/items");

const app = express();

app.use(express.json());

// Mongo connection
// Get connection string from environmental variables or from ./config/keys.js file (ignored in Git)
const db = process.env.MONGO_URI || require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Use routes
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
