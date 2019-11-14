// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_pb = require('./users_pb.js');

function serialize_users_CommonResponse(arg) {
  if (!(arg instanceof users_pb.CommonResponse)) {
    throw new Error('Expected argument of type users.CommonResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_CommonResponse(buffer_arg) {
  return users_pb.CommonResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_UserNotification(arg) {
  if (!(arg instanceof users_pb.UserNotification)) {
    throw new Error('Expected argument of type users.UserNotification');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_UserNotification(buffer_arg) {
  return users_pb.UserNotification.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_UserObject(arg) {
  if (!(arg instanceof users_pb.UserObject)) {
    throw new Error('Expected argument of type users.UserObject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_UserObject(buffer_arg) {
  return users_pb.UserObject.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_UserSub(arg) {
  if (!(arg instanceof users_pb.UserSub)) {
    throw new Error('Expected argument of type users.UserSub');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_UserSub(buffer_arg) {
  return users_pb.UserSub.deserializeBinary(new Uint8Array(buffer_arg));
}


// The User service definition.
var UsersService = exports.UsersService = {
  // Get all Users with filter - and subsequently keep sending change notification.
  getUsers: {
    path: '/users.Users/GetUsers',
    requestStream: false,
    responseStream: true,
    requestType: users_pb.UserSub,
    responseType: users_pb.UserNotification,
    requestSerialize: serialize_users_UserSub,
    requestDeserialize: deserialize_users_UserSub,
    responseSerialize: serialize_users_UserNotification,
    responseDeserialize: deserialize_users_UserNotification,
  },
  // Create a new User - A simple RPC
  createUser: {
    path: '/users.Users/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.UserObject,
    responseType: users_pb.CommonResponse,
    requestSerialize: serialize_users_UserObject,
    requestDeserialize: deserialize_users_UserObject,
    responseSerialize: serialize_users_CommonResponse,
    responseDeserialize: deserialize_users_CommonResponse,
  },
  deleteUser: {
    path: '/users.Users/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.UserObject,
    responseType: users_pb.CommonResponse,
    requestSerialize: serialize_users_UserObject,
    requestDeserialize: deserialize_users_UserObject,
    responseSerialize: serialize_users_CommonResponse,
    responseDeserialize: deserialize_users_CommonResponse,
  },
};

exports.UsersClient = grpc.makeGenericClientConstructor(UsersService);
