const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// mongoose
//   .connect("mongodb://localhost/attacksDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("mongoDB connected"))
//   .catch((error) => console.log(error));

// const db = mongoose.connection;
app.get('/', (req, res) => {
      res.json('Hello from the root path!');
});


const message = "server has started";
app.listen(port, () => console.log(message));
