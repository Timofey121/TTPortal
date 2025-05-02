# 🚀 TTPortal Project

Микросервисная архитектура для новостного портала на Spring Boot.  
**Состав сервисов:**  
✅ Eureka Server (регистрация микросервисов)  
✅ NewsPortal (основная логика)  
✅ API Gateway (маршрутизация запросов)

---

## 🛠 Структура проекта

- **`eureka-service`** — сервис регистрации и обнаружения микросервисов (Eureka Server).
- **`newsPortal-service`** — основной сервис для работы с новостями.
- **`api-gateway`** — API Gateway для маршрутизации запросов.

---

## ⚙️ Требования

- **Java 17+**
- **Maven** (рекомендуется) или Gradle
- **Spring Boot 3.x**

---

## 🚀 Запуск проекта

### 1. Сервис регистрации (Eureka Server)

```bash
cd eureka-service
mvn spring-boot:run
```

Порт: 8761 (доступно по адресу: http://localhost:8761).

### 2. Запуск newsPortal-service

``` bash
cd newsPortal-service
mvn spring-boot:run
```

Порт: 8763 (настраивается в application.yml).

### 3. Запуск API Gateway

``` bash
cd api-gateway
mvn spring-boot:run
```

Порт: 8080 (основной порт для доступа к API).
