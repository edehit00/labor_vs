# labor_vs
Labor for distributed systems

First open a Docker Desktop App on Windows 
then enter following command:

docker-compose -f .\docker-compose.yml up 

to startup the container

if changes in backend execute following commands in backend directory:

mvn package -DskipTests                         // for a new .jar
docker image build -t backend .                 // to build a new docker image then
docker-compose -f .\docker-compose.yml up       // again

swagger documentation at http://localhost:8080/swagger-ui.html or
http://localhost:8080/swagger-ui/index.html

## frontend

cd .\frontend\
npm install
npm start

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
