const express = require("express");
const { ExpressPeerServer } = require("peer");
const http = require("http");

const app = express();
const server = http.createServer(app);

const peerServer = ExpressPeerServer(server, {
  path: "/peerjs",
  allow_discovery: true,
});

app.use("/peerjs", peerServer);

app.get("/", (req, res) => {
  res.send("✅ PeerJS server is running!");
});

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
  