package login

import (
	"context"
	"errors"
)

type Login_Server struct {
	loginDetails *Message
	UnimplementedLoginServer
}

func (l *Login_Server) Login(ctx context.Context, message *Message) (*Token, error) {
	if len(message.Password) < 8 {
		return nil, errors.New("Password is too short")
	}
	return &Token{
		Token: message.Username,
	}, nil
}

func (l *Login_Server) Register(ctx context.Context, message *Message) (*RegisterResponse, error) {
	if len(message.Password) < 8 {
		return nil, errors.New("Password is too short")
	}
	return &RegisterResponse{
		Success: true,
	}, nil
}
