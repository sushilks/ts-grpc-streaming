// package: users
// file: users.proto

import * as jspb from "google-protobuf";

export class UserNotification extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): UserObject | undefined;
  setUser(value?: UserObject): void;

  getEventType(): UserNotification.EventTypeMap[keyof UserNotification.EventTypeMap];
  setEventType(value: UserNotification.EventTypeMap[keyof UserNotification.EventTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserNotification.AsObject;
  static toObject(includeInstance: boolean, msg: UserNotification): UserNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserNotification;
  static deserializeBinaryFromReader(message: UserNotification, reader: jspb.BinaryReader): UserNotification;
}

export namespace UserNotification {
  export type AsObject = {
    user?: UserObject.AsObject,
    eventType: UserNotification.EventTypeMap[keyof UserNotification.EventTypeMap],
  }

  export interface EventTypeMap {
    ADDED: 0;
    REMOVED: 1;
  }

  export const EventType: EventTypeMap;
}

export class UserObject extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserObject.AsObject;
  static toObject(includeInstance: boolean, msg: UserObject): UserObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserObject;
  static deserializeBinaryFromReader(message: UserObject, reader: jspb.BinaryReader): UserObject;
}

export namespace UserObject {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class CommonResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CommonResponse): CommonResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommonResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonResponse;
  static deserializeBinaryFromReader(message: CommonResponse, reader: jspb.BinaryReader): CommonResponse;
}

export namespace CommonResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class UserSub extends jspb.Message {
  getSubscriptionid(): string;
  setSubscriptionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSub.AsObject;
  static toObject(includeInstance: boolean, msg: UserSub): UserSub.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserSub, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSub;
  static deserializeBinaryFromReader(message: UserSub, reader: jspb.BinaryReader): UserSub;
}

export namespace UserSub {
  export type AsObject = {
    subscriptionid: string,
  }
}

