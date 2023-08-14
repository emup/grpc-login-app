package main

import (
	"context"
	"grpc-login-app/login/generated"

	"google.golang.org/grpc"
)

func main() {
	conn, err := grpc.Dial(":8080", grpc.WithInsecure())
	if err != nil {
		panic(err)
	}
	defer conn.Close()

	loginClient := generated.NewLoginClient(conn)

	token, err := loginClient.Login(context.Background(),
		&generated.LoginCredentials{Username: "user",
			Password: "OwO23456",
		})
	if err != nil {
		print(err.Error())
	}
	print(token.GetToken())
}
