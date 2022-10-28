package main

import (
	"encoding/json"
	"io/ioutil"
)

func readPeopleData() (*PeopleData, error) {
	content, err := ioutil.ReadFile("../data/data.json")
	if err != nil {
		return nil, err
	}

	var data PeopleData

	err = json.Unmarshal(content, &data)

	if err != nil {
		return nil, err
	}

	return &data, nil
}

func writePeopleData(data PeopleData) error {
	content, err := json.Marshal(data)
	if err != nil {
		return err
	}

	err = ioutil.WriteFile("../data/data.json", content, 0644)
	if err != nil {
		return err
	}

	return nil
}
