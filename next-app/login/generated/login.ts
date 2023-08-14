// Original file: ../proto/login.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { EmptyResponse as _EmptyResponse, EmptyResponse__Output as _EmptyResponse__Output } from './EmptyResponse';
import type { LoginCredentials as _LoginCredentials, LoginCredentials__Output as _LoginCredentials__Output } from './LoginCredentials';
import type { RegisterCredentials as _RegisterCredentials, RegisterCredentials__Output as _RegisterCredentials__Output } from './RegisterCredentials';
import type { Token as _Token, Token__Output as _Token__Output } from './Token';

export interface loginClient extends grpc.Client {
  Login(argument: _LoginCredentials, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Token__Output>): grpc.ClientUnaryCall;
  Login(argument: _LoginCredentials, metadata: grpc.Metadata, callback: grpc.requestCallback<_Token__Output>): grpc.ClientUnaryCall;
  Login(argument: _LoginCredentials, options: grpc.CallOptions, callback: grpc.requestCallback<_Token__Output>): grpc.ClientUnaryCall;
  Login(argument: _LoginCredentials, callback: grpc.requestCallback<_Token__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginCredentials, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Token__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginCredentials, metadata: grpc.Metadata, callback: grpc.requestCallback<_Token__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginCredentials, options: grpc.CallOptions, callback: grpc.requestCallback<_Token__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginCredentials, callback: grpc.requestCallback<_Token__Output>): grpc.ClientUnaryCall;
  
  Register(argument: _RegisterCredentials, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_EmptyResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _RegisterCredentials, metadata: grpc.Metadata, callback: grpc.requestCallback<_EmptyResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _RegisterCredentials, options: grpc.CallOptions, callback: grpc.requestCallback<_EmptyResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _RegisterCredentials, callback: grpc.requestCallback<_EmptyResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterCredentials, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_EmptyResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterCredentials, metadata: grpc.Metadata, callback: grpc.requestCallback<_EmptyResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterCredentials, options: grpc.CallOptions, callback: grpc.requestCallback<_EmptyResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterCredentials, callback: grpc.requestCallback<_EmptyResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface loginHandlers extends grpc.UntypedServiceImplementation {
  Login: grpc.handleUnaryCall<_LoginCredentials__Output, _Token>;
  
  Register: grpc.handleUnaryCall<_RegisterCredentials__Output, _EmptyResponse>;
  
}

export interface loginDefinition extends grpc.ServiceDefinition {
  Login: MethodDefinition<_LoginCredentials, _Token, _LoginCredentials__Output, _Token__Output>
  Register: MethodDefinition<_RegisterCredentials, _EmptyResponse, _RegisterCredentials__Output, _EmptyResponse__Output>
}
