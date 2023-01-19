const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://hoorwen:8PhPq2oTvulynXJx@cluster0.ajwstkx.mongodb.net/papays ";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUrlTopology: true,
  },
  (err, data) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = data;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is runing successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
