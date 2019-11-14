// package: users
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as users_pb from "./users_pb";

interface IUsersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUsers: IUsersService_IGetUsers;
    createUser: IUsersService_ICreateUser;
    deleteUser: IUsersService_IDeleteUser;
}

interface IUsersService_IGetUsers extends grpc.MethodDefinition<users_pb.UserSub, users_pb.UserNotification> {
    path: string; // "/users.Users/GetUsers"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<users_pb.UserSub>;
    requestDeserialize: grpc.deserialize<users_pb.UserSub>;
    responseSerialize: grpc.serialize<users_pb.UserNotification>;
    responseDeserialize: grpc.deserialize<users_pb.UserNotification>;
}
interface IUsersService_ICreateUser extends grpc.MethodDefinition<users_pb.UserObject, users_pb.CommonResponse> {
    path: string; // "/users.Users/CreateUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.UserObject>;
    requestDeserialize: grpc.deserialize<users_pb.UserObject>;
    responseSerialize: grpc.serialize<users_pb.CommonResponse>;
    responseDeserialize: grpc.deserialize<users_pb.CommonResponse>;
}
interface IUsersService_IDeleteUser extends grpc.MethodDefinition<users_pb.UserObject, users_pb.CommonResponse> {
    path: string; // "/users.Users/DeleteUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.UserObject>;
    requestDeserialize: grpc.deserialize<users_pb.UserObject>;
    responseSerialize: grpc.serialize<users_pb.CommonResponse>;
    responseDeserialize: grpc.deserialize<users_pb.CommonResponse>;
}

export const UsersService: IUsersService;

export interface IUsersServer {
    getUsers: grpc.handleServerStreamingCall<users_pb.UserSub, users_pb.UserNotification>;
    createUser: grpc.handleUnaryCall<users_pb.UserObject, users_pb.CommonResponse>;
    deleteUser: grpc.handleUnaryCall<users_pb.UserObject, users_pb.CommonResponse>;
}

export interface IUsersClient {
    getUsers(request: users_pb.UserSub, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserNotification>;
    getUsers(request: users_pb.UserSub, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserNotification>;
    createUser(request: users_pb.UserObject, callback: (error: grpc.ServiceError | null, response: users_pb.CommonResponse) => void): grpc.ClientUnaryCall;
    createUser(request: users_pb.UserObject, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.CommonResponse) => void): grpc.ClientUnaryCall;
    createUser(request: users_pb.UserObject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.CommonResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: users_pb.UserObject, callback: (error: grpc.ServiceError | null, response: users_pb.CommonResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: users_pb.UserObject, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.CommonResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: users_pb.UserObject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.CommonResponse) => void): grpc.ClientUnaryCall;
}

export class UsersClient extends grpc.Client implements IUsersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUsers(request: users_pb.UserSub, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserNotification>;
    public getUsers(request: users_pb.UserSub, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserNotification>;
    public createUser(request: users_pb.UserObject, callback: (error: grpc.ServiceError | null, response: users_pb.CommonResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: users_pb.UserObject, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.CommonResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: users_pb.UserObject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.CommonResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: users_pb.UserObject, callback: (error: grpc.ServiceError | null, response: users_pb.CommonResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: users_pb.UserObject, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.CommonResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: users_pb.UserObject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.CommonResponse) => void): grpc.ClientUnaryCall;
}
