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

// Optional: handle root route to avoid "Cannot GET /"
app.get("/", (req, res) => {
  res.send("✅ PeerJS server is running!");
});

// Listen for peer connections
peerServer.on("connection", (client) => {
  console.log(`Client connected: ${client.id}`);
});

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
