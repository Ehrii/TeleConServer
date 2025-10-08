const { PeerServer } = require("peer");

const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  path: "/peerjs",
  allow_discovery: true,
});

peerServer.on("connection", (client) => {
  console.log(`Client connected: ${client.id}`);
});
console.log("✅ PeerJS server is running...");
