cd backend
mvn package -DskipTests
docker image build -t backend .
cd ..
cd frontend
docker build -t frontend .
cd ..
docker-compose -f docker-compose.yml up