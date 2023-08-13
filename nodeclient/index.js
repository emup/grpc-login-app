const grpc = require("grpc")
const loginProto = require("./login_pb")
const loginGrpc = require("./login_grpc_pb")

// Replace 'localhost:50051' with your server's address
const client = new loginGrpc.LoginServiceClient(
  "localhost:50051",
  grpc.credentials.createInsecure()
)

const request = new loginProto.LoginRequest()
request.setUsername("your_username")
request.setPassword("your_password")

client.login(request, (error, response) => {
  if (!error) {
    console.log("Login response:", response.getMessage())
  } else {
    console.error("Error:", error.message)
  }
})
