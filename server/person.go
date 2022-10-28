package main

import (
	"context"
	livescore "zachacious/server/pkg"

	"github.com/teris-io/shortid"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type PersonData struct {
	Name  string `json:"name"`
	Id    string `json:"id"`
	Email string `json:"email"`
	Phone string `json:"phone"`
}

type PeopleData struct {
	People []PersonData `json:"people"`
}

func (lss *liveScoreServer) GetPersonById(ctx context.Context, in *livescore.GetPersonByIdRequest) (*livescore.GetPersonByIdResponse, error) {
	data, err := readPeopleData()
	if err != nil {
		return nil, status.Error(codes.Internal, "Internal server error")
	}

	for _, person := range data.People {
		if person.Id == in.GetId() {
			return &livescore.GetPersonByIdResponse{
				Person: &livescore.Person{
					Name:  person.Name,
					Email: person.Email,
					Phone: person.Phone,
					Id:    person.Id,
				},
			}, nil
		}
	}

	return nil, status.Error(codes.NotFound, "Person not found")
}

func (lss *liveScoreServer) CreatePerson(ctx context.Context, in *livescore.CreatePersonRequest) (*livescore.CreatePersonResponse, error) {
	person := in.GetPerson()

	data, dataErr := readPeopleData()

	if dataErr != nil {
		return nil, status.Error(codes.Internal, "Internal server error")
	}

	uid, uidErr := shortid.Generate()

	if uidErr != nil {
		return nil, status.Error(codes.Internal, "Internal server error")
	}

	data.People = append(data.People, PersonData{
		Id:    uid,
		Name:  person.GetName(),
		Email: person.GetEmail(),
		Phone: person.GetPhone(),
	})

	writeErr := writePeopleData(*data)

	if writeErr != nil {
		return nil, status.Error(codes.Internal, "Internal server error")
	}

	return &livescore.CreatePersonResponse{
		Person: &livescore.Person{
			Name:  person.GetName(),
			Email: person.GetEmail(),
			Phone: person.GetPhone(),
			Id:    uid,
		},
	}, nil
}

func (lss *liveScoreServer) GetAllPeople(ctx context.Context, in *livescore.GetAllPeopleRequest) (*livescore.GetAllPeopleResponse, error) {
	data, err := readPeopleData()
	if err != nil {
		return nil, status.Error(codes.Internal, "Internal server error")
	}

	var people []*livescore.Person

	for _, person := range data.People {
		people = append(people, &livescore.Person{
			Name:  person.Name,
			Email: person.Email,
			Phone: person.Phone,
			Id:    person.Id,
		})
	}

	return &livescore.GetAllPeopleResponse{
		People: people,
	}, nil
}
