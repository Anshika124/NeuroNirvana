const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose.connect(
 "mongodb+srv://anshikaprajapati124:anshikaprajapati124@cluster0.qmiubtx.mongodb.net/NeuroNirvana?retryWrites=true&w=majority",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("error", (err) => {
  console.log("Not connected to database");
});

mongoose.connection.on("connected", (connected) => {
  console.log("Connected to databse");
});
