# Customer Billing Portal API

This is a NestJS-based API for managing customer billing records. It provides endpoints for retrieving, creating, updating, and deleting billing records. The API is connected to a PostgreSQL database and uses TypeORM for database operations.

---

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Setup](#setup)
4. [Running the Application](#running-the-application)
5. [Accessing Swagger Documentation](#accessing-swagger-documentation)
6. [Seeding the Database](#seeding-the-database)
7. [API Endpoints](#api-endpoints)
8. [Docker Setup](#docker-setup)
9. [Testing](#testing)

---

## Features

- **CRUD Operations**: Create, read, update, and delete billing records.
- **Role-Based Access Control**: Admin-only access for creating, updating, and deleting records.
- **Swagger Documentation**: Interactive API documentation.
- **PostgreSQL Integration**: Uses TypeORM to connect to a PostgreSQL database.
- **Docker Support**: Ready for containerization with Docker.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v22 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v15 or higher)
- [NestJS CLI](https://docs.nestjs.com/cli/overview) (optional but recommended)
- [Docker](https://www.docker.com/) (optional, for containerization)

---

## Setup

### 1. Clone the Repository

```bash
  git clone https://github.com/chowks/insurance-portfolio.git
  cd insurance-portfolio
```

2. **Install Dependencies**:

   ```bash
   npm i -g pnpm && pnpm i
   ```

3. **Set Up PostgreSQL**:

   - Create a database named `CUSTOMER_BILLING_PORTAL`.
   - Update the database credentials in the `app.module.ts` file or environment variables.

4. **Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   DB_DATABASE=CUSTOMER_BILLING_PORTAL
   ```

---

## Running the Application

To start the application in development mode:

```bash
pnpm run start:dev
```

To start the application in production mode:

```bash
pnpm run start:prod
```

The API will be available at:

```
http://localhost:4000
```

---

## Accessing Swagger Documentation

Once the application is running, you can access the Swagger documentation at:

```
http://localhost:4000/api
```

The Swagger UI allows you to:

- View all available endpoints.
- Test the API directly from the browser.
- Explore request and response schemas.

---

## Seeding the Database

To seed the database with sample data, run the following command:

```bash
ts-node seed.ts
```

This will insert the provided customer records into the `BILLING_RECORDS` table.

---

## API Endpoints

### **GET `/billing`**

- **Description**: Retrieve billing records with optional filtering by `productCode` and `location`.
- **Access**: All users.
- **Example Request**:
  ```http
  GET /billing?productCode=5000&location=East%20Malaysia
  ```

### **POST `/billing`**

- **Description**: Create a new billing record.
- **Access**: Admin only.
- **Example Request**:

  ```http
  POST /billing
  Content-Type: application/json

  {
    "email": "new.customer@example.com",
    "firstName": "New",
    "lastName": "Customer",
    "photo": "https://example.com/photo.jpg",
    "productCode": 4000,
    "location": "West Malaysia",
    "premiumPaid": 100.00
  }
  ```

### **PUT `/billing`**

- **Description**: Update an existing billing record by `productCode`.
- **Access**: Admin only.
- **Example Request**:

  ```http
  PUT /billing?productCode=5000
  Content-Type: application/json

  {
    "location": "East Malaysia",
    "premiumPaid": 200.00
  }
  ```

### **DELETE `/billing/:id`**

- **Description**: Delete a billing record by ID.
- **Access**: Admin only.
- **Example Request**:
  ```http
  DELETE /billing/1
  ```

### **DELETE `/billing?productCode=:code`**

- **Description**: Delete billing records by `productCode`.
- **Access**: Admin only.
- **Example Request**:
  ```http
  DELETE /billing?productCode=5000
  ```

---

## Docker Setup

To run the application using Docker:

1. **Build and Run**:

   ```bash
   docker-compose up
   ```

2. **Access the API**:
   The API will be available at:

   ```
   http://localhost:4000
   ```

3. **Access the Database**:
   The PostgreSQL database will be available at:
   ```
   localhost:5432
   ```

---

## Testing

To run unit tests:

```bash
pnpm run test
```

To check test coverage:

```bash
pnpm run test:cov
```
