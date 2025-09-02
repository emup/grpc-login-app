package main

import (
	"grpc-login-app/login"
	"grpc-login-app/login/generated"
	"net"

	"google.golang.org/grpc"
)

func main() {
	listener, err := net.Listen("tcp", ":8080")
	if err != nil {
		panic(err)
	}

	m := &login.Login_Server{}

	g := grpc.NewServer()

	generated.RegisterLoginServer(g, m)

	err = g.Serve(listener)
	if err != nil {
		panic(err)
	}
}
