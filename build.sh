
./node_modules/.bin/grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:./src/generated \
  --grpc_out='./src/generated' \
  --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
  -I ./src/generated/ \
  -I ./src \
 users.proto

./node_modules/.bin/grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=./src/generated \
  -I ./src/generated \
  -I ./src \
 users.proto
