# labor_vs
Labor for distributed systems

## update 
First open a Docker Desktop App on Windows and use the following command to start up the project:
.\run.sh

to stop the docker container:
.\stop.sh

## deprecated
First open a Docker Desktop App on Windows and build the docker images needed for this project with following commands in root directory:

docker image build -t backend .                 // to build a new docker image for the backend then
cd .\frontend\
docker build -t frontend .                      // to build a frontend docker image. can be skipped by running the commands below 
                                                // in ## frontend
cd..                                            // but i liked the concept of starting the whole project with a single command 
                                                // after the setup
docker-compose -f .\docker-compose.yml up       // to start all container (postgres, backend, frontend) 
                                                // backend might take a while it needs the db to start properly


## if changes are done in backend execute following commands:

cd .\backend\
mvn package -DskipTests                         // for a new .jar (-DskipTests is important the backend is designed to only run 
                                                // in a docker environment -> the test will fail and no jar will be created)
docker image build -t backend .                 // to build a new docker image then
docker-compose -f .\docker-compose.yml up       // again

swagger documentation at http://localhost:8080/swagger-ui.html or
http://localhost:8080/swagger-ui/index.html

## frontend

cd .\frontend\
npm install
npm start

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## postman

A postman collection for all api endpoints is provided in the root directory, if you want to test something in postman

## problems

It's possible for the frontend to not show the ToDos if the addToDo button is pressed to fast, but simply refreshing with f5 fixes the the problem.
