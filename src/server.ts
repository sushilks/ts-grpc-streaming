import grpc from 'grpc';
import * as users_grpc_pb from './generated/users_grpc_pb';
import * as users_pb from './generated/users_pb';
import e from 'express';

class UsersServer implements users_grpc_pb.IUsersServer {
    private userList: Map<number, string>;
    private mapSet: Set<grpc.ServerWritableStream<users_pb.UserSub>>;
    constructor() {
        this.userList = new Map();
        this.mapSet = new Set();
    }
    public cleanup(subid, call) {
        console.log(`Removing SubID ${subid} from notification list`);
        call.end();
        this.mapSet.delete(call);
    }
    public getUsers(
        // grpc.handleServerStreamingCall<users_pb.UserFilter, users_pb.UserNotification>;
        call: grpc.ServerWritableStream<users_pb.UserSub>) {
        const req = call.request;
        const subid = req.getSubscriptionid();
        console.log(`Adding a SubID ${subid} to notification list current size=${this.mapSet.size}`);
        this.mapSet.add(call);
        call.on('close', () => {
            this.cleanup(subid, call);
        });
        call.on('error', (e) => {
            console.log('error ', e);
            this.cleanup(subid, call);
        });
        this.userList.forEach((value, key) => {
            // do a full db sync on new subscriptions.
            const uo = new users_pb.UserObject();
            uo.setName(value);
            uo.setId(key);
            const resp = new users_pb.UserNotification();
            resp.setUser(uo);
            resp.setEventType(users_pb.UserNotification.EventType.ADDED);
            call.write(resp);
        });
    }
    public createUser(
        call: grpc.ServerUnaryCall<users_pb.UserObject>,
        cb: grpc.sendUnaryData<users_pb.CommonResponse>) {
        const req = call.request;
        const uid = req.getId();
        const uname = req.getName();
        console.log('create call is received ', uid, uname);
        this.userList.set(uid, uname);
        this.mapSet.forEach((callHandler) => {
            const resp = new users_pb.UserNotification();
            const uo = new users_pb.UserObject();
            uo.setName(uname);
            uo.setId(uid);
            resp.setUser(uo);
            resp.setEventType(users_pb.UserNotification.EventType.ADDED);
            callHandler.write(resp)
        });
        const resp = new users_pb.CommonResponse();
        resp.setCode(200);
        cb(null, resp);
    }

    public deleteUser(
        call: grpc.ServerUnaryCall<users_pb.UserObject>,
        cb: grpc.sendUnaryData<users_pb.CommonResponse>) {
        const req = call.request;
        const uid = req.getId();
        console.log('delete call is received ', uid);
        if (this.userList.has(uid)) {
            const uname = this.userList.get(uid);
            this.userList.delete(uid);
            if (uname) {
                this.mapSet.forEach((callHandler) => {
                    const resp = new users_pb.UserNotification();
                    const uo = new users_pb.UserObject();
                    uo.setName(uname);
                    uo.setId(uid);
                    resp.setUser(uo);
                    resp.setEventType(users_pb.UserNotification.EventType.REMOVED);
                    callHandler.write(resp)
                });
            }
        }
        const resp = new users_pb.CommonResponse();
        resp.setCode(200);
        cb(null, resp);
    };
}

async function main() {
    const loc = '0.0.0.0:50180';
    const server = new grpc.Server();
    const userServer = new UsersServer();
    server.addService<users_grpc_pb.IUsersServer>(
        users_grpc_pb.UsersService, userServer);
    server.bind(loc, grpc.ServerCredentials.createInsecure());
    server.start();
    console.log('Server Started... at ', loc);
}

main();