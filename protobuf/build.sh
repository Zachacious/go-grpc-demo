mkdir -p ../api ../api/js ../pkg

protoc -I. --go_out=../pkg \
--go_opt=paths=source_relative \
--go-grpc_out=../pkg --go-grpc_opt=paths=source_relative \
--js_out=import_style=commonjs:../api/js \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:../api/js \
*.proto

jsdoc -d=../api ../api/js/*.js > /dev/null