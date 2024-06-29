FROM openjdk:17
ADD backend/target/vs-labor-0.0.1-SNAPSHOT.jar vs-labor-0.0.1-SNAPSHOT.jar
EXPOSE 8080
CMD ["java", "-jar", "vs-labor-0.0.1-SNAPSHOT.jar"]