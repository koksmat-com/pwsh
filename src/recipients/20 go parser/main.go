package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"path"
	"strings"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// use godot package to load/read the .env file and
// return the value of the key
func goDotEnvVariable(key string) string {

	// load .env file
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	return os.Getenv(key)
}

/*
	{
	  "Id": "testec0811ea-58ac-4e68-b7f4-c3638de0273d",
	  "Guid": "8e05874b-92b4-48e9-b350-3dba380b2c6f",
	  "Alias": "testec0811ea-58ac-4e68-b7f4-c3638de0273d",
	  "RecipientTypeDetails": "SharedMailbox",
	  "EmailAddresses": [
	    "SMTP:testec0811ea-58ac-4e68-b7f4-c3638de0273d@M365x65867376.onmicrosoft.com"
	  ],
	  "DisplayName": "testec0811ea-58ac-4e68-b7f4-c3638de0273d",
	  "DistinguishedName": "CN=testec0811ea-58ac-4e68-b7f4-c3638de0273d,OU=M365x65867376.onmicrosoft.com,OU=Microsoft Exchange Hosted Organizations,DC=EURPR08A009,DC=PROD,DC=OUTLOOK,DC=COM"
	},
*/
type recipientsType []struct {
	Id                   string   `json:"Id"`
	Guid                 string   `json:"Guid"`
	Alias                string   `json:"Alias"`
	RecipientTypeDetails string   `json:"RecipientTypeDetails"`
	EmailAddresses       []string `json:"EmailAddresses"`
	DisplayName          string   `json:"DisplayName"`
	DistinguishedName    string   `json:"DistinguishedName"`
}

type recipentData struct {
	_Id  string
	Data recipientsType
}

func main() {
	fmt.Println("Hello, World!")
	datapath := goDotEnvVariable("DATAOUT")
	// Open our jsonFile
	jsonFile, err := os.Open(path.Join(datapath, "recipents.json"))
	// if we os.Open returns an error then handle it
	if err != nil {
		fmt.Println(err)
	}
	body, readErr := ioutil.ReadAll(jsonFile)

	if readErr != nil {
		log.Fatal(readErr)
	}
	recipients := recipientsType{}
	jsonErr := json.Unmarshal(body, &recipients)
	if jsonErr != nil {
		log.Fatal(jsonErr)
	}
	fmt.Println("Successfully ", len(recipients), "recipents.json ")

	// for _, recipient := range recipients {
	// 	fmt.Println(recipient.DisplayName)

	// }

	credential := options.Credential{
		Username: goDotEnvVariable("DATABASEADMIN"),
		Password: goDotEnvVariable("DATABASEPASSWORD"),
	}

	// connectionString := "mongodb://host.docker.internal:27017"
	connectionString := goDotEnvVariable("DATABASEURL") // "mongodb://localhost:27017"
	clientOpts := options.Client().ApplyURI(connectionString).SetAuth(credential).SetDirect(true)

	client, err := mongo.Connect(context.TODO(), clientOpts)
	if err != nil {
		panic(err)
	}
	dbs, err := client.ListDatabaseNames(context.TODO(), bson.M{})
	databaseName := goDotEnvVariable("DATABASE")

	recipientData := recipentData{}
	recipientData._Id = "1"
	recipientData.Data = recipients
	client.Database(databaseName).Collection("recipients MASTER").InsertOne(context.TODO(), recipientData)
	fmt.Println(strings.Join(dbs, "\n"))
	// defer the closing of our jsonFile so that we can parse it later on
	defer jsonFile.Close()
}
