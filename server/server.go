package main

import (
	"fmt"
	"log"
	"net"
	livescore "zachacious/server/pkg"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

const addr = "localhost:50004"

type liveScoreServer struct {
	livescore.UnimplementedLiveScoreServiceServer
}

func main() {
	conn, err := net.Listen("tcp", addr)

	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	grpcServer := grpc.NewServer()

	server := liveScoreServer{}

	livescore.RegisterLiveScoreServiceServer(grpcServer, &server)
	reflection.Register(grpcServer)

	fmt.Println("Server listening on port", addr)

	if err := grpcServer.Serve(conn); err != nil {
		log.Fatalf("failed to serve: %s", err)
	}
}

// grpcurl -d '{"name": "zach"}' -plaintext localhost:50004 LiveScoreService/GetPersonById
// grpcurl -d '{ "id": "vbF6YxNVR"}' -plaintext localhost:50004 LiveScoreService/GetPersonById
