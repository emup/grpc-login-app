"use server";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { loginClient, loginDefinition, loginHandlers } from "./generated/login";
import path from "path";

const LOGIN_PROTO_PATH = path.join(process.cwd(), "../proto/login.proto");

const packageDefinition = protoLoader.loadSync(LOGIN_PROTO_PATH, {
  keepCase: true,
  defaults: true,
  oneofs: true,
});

export async function Login(
  username: string,
  password: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    const definitions = grpc.loadPackageDefinition(packageDefinition);
    const _loginClient = new definitions.login(
      "localhost:8080",
      grpc.credentials.createInsecure()
    ) as loginClient;

    _loginClient.Login(
      {
        Username: username,
        Password: password,
      },
      (err, res) => {
        if (err) {
          reject(err);
        }
        if (res) {
          resolve(res.Token as string);
        }
      }
    );
  });
}
