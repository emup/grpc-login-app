package login

import (
	"context"
	"errors"
	"grpc-login-app/login/generated"
)

type Login_Server struct {
	LoginDetails *generated.LoginCredentials
	generated.UnimplementedLoginServer
}

func (l *Login_Server) Login(ctx context.Context, creds *generated.LoginCredentials) (*generated.Token, error) {
	if !passwordValid(creds.Password) {
		return nil, errors.New("password is too short")
	}
	return &generated.Token{
		Token: creds.Username,
	}, nil
}

func (l *Login_Server) Register(ctx context.Context, message *generated.RegisterCredentials) (*generated.EmptyResponse, error) {
	if !passwordValid(message.Password) {
		return nil, errors.New("password is too short")
	}
	return &generated.EmptyResponse{}, nil
}

func passwordValid(password string) bool {
	return len(password) >= 8
}
