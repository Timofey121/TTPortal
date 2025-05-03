FROM maven:3.8.6-eclipse-temurin-17 AS builder
WORKDIR /build
COPY src ./src
COPY pom.xml .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=builder /build/target/*.jar app.jar
EXPOSE 8761
CMD ["java", "-jar", "app.jar"]