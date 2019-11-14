import grpc from 'grpc';
import minimist from 'minimist';
import * as users_grpc_pb from './generated/users_grpc_pb';
import * as users_pb from './generated/users_pb';
const argv = minimist(process.argv.slice(2));

function help() {
        console.log(
        `Usages: ${
            process.argv[0]
          } -a -i <user id> -u <user name> # To add Users`
        );
        console.log(
            `Usages: ${
                process.argv[0]
              } -d -i <user id> # To remove users`
            );
        console.log(
            `Usages: ${
                process.argv[0]
              } -s   # To subscribe`
            );
        process.exit(0);
  }

  async function add(uid: number, uname: string) {
    const client = new users_grpc_pb.UsersClient('127.0.0.1:50180', grpc.credentials.createInsecure());
    const u1 = new users_pb.UserObject();
    u1.setId(uid);
    u1.setName(uname);
    client.createUser(u1, (err, resp) => {
        if (err) {
            console.log('Create user err ', err);
        }
        console.log(`Created User ${uid} with name ${uname}`);
    });
}
async function sub() {
    const client = new users_grpc_pb.UsersClient('127.0.0.1:50180', grpc.credentials.createInsecure());
    const uf = new users_pb.UserSub();
    const id = 'sub-' + Math.floor(Math.random() *  1024);
    console.log('Subscribing with ID:', id);
    uf.setSubscriptionid(id);
    const rstream = client.getUsers(uf);
    rstream.on('close', () => {
        console.log('stream closed.');
        process.exit(0);
    });
    rstream.on('data', (chunk: users_pb.UserNotification) => {
        // console.log('stream got data ', chunk);
        try {
            const uo = chunk.getUser();
            if (uo) {
                let etype = 'REMOVED';
                if (chunk.getEventType() === users_pb.UserNotification.EventType.ADDED)  {
                    etype = 'ADDED';
                }
                console.log(`Update[${etype}] UserID:${uo.getId()} UserName:${uo.getName()}`);
            }
        } catch (e) {
            console.error('Error parsing the streaming data', e.stack);
        }
    });
    rstream.on('end', () => {
        console.log('stream got end.');
    });
    rstream.on('remove', () => {
        console.log('stream got end.');
    });
    rstream.on('error', (e) => {
        console.log('stream got error.', e);
    });
    await new Promise((res)=> {
        setTimeout(()=>res(), 1000);
    })
    // rstream.destroy();
}

async function remove(uid: number) {
    const client = new users_grpc_pb.UsersClient('127.0.0.1:50180', grpc.credentials.createInsecure());
    const u1 = new users_pb.UserObject();
    u1.setId(uid);
    client.deleteUser(u1, (err, resp) => {
        if (err) {
            console.log('Remove user err ', err);
        }
        console.log('Removed user ', uid);
    });
}


if (argv.h) {
    help();
} else if (argv.s) {
    sub();
} else if (argv.d) {
    remove(argv.i);
} else if (argv.a) {
    add(argv.i, argv.u);
} else {
    help();
}
