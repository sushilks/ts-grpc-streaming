# ts-grpc-streaming
GRPC Streaming example fully in typescript.
An Example project to show grpc usages in typescript.
it has typescript examples for both unary and streaming calls.


# To run
npm i
./build.sh

# Run the server
./node_modules/.bin/ts-node ./src/server.ts

# Run any number of clients in subscription mode
# It will first list the data followed by change notificaiton
 ./node_modules/.bin/ts-node ./src/client.ts -s


# Run the User Add/Delete
```
./node_modules/.bin/ts-node ./src/client.ts -a -i 10 -u sam
./node_modules/.bin/ts-node ./src/client.ts -a -i 11 -u mike
./node_modules/.bin/ts-node ./src/client.ts -a -i 12 -u mary
./node_modules/.bin/ts-node ./src/client.ts -a -i 13 -u bob
```
# add another client now in differnt window
 ./node_modules/.bin/ts-node ./src/client.ts -s

# Run some more add delete opration
```
./node_modules/.bin/ts-node ./src/client.ts -a -i 14 -u viky
./node_modules/.bin/ts-node ./src/client.ts -d -i 10
./node_modules/.bin/ts-node ./src/client.ts -d -i 13
```
