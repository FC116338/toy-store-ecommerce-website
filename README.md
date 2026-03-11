# toy-store-ecommerce-website
Toy store (Kids soft toys) website using Spring Boot and JavaScript

# Toy Store E-Commerce Website

## Project Description

This project is a **Toy Store E-Commerce Website** developed as a university assignment.
It allows users to browse toys, add products to a cart, and complete a checkout process.
The system includes a **frontend interface** and a **backend API** for managing products.

---

## Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Java
* Spring Boot

### Database

* MySQL

---

## Features

* Product listing from backend API
* Product images displayed for each item
* Add to cart functionality
* Shopping cart page
* Checkout page with billing details
* Login and registration modal
* Email validation for users
* Payment options (Cash on Delivery / Card)
* Responsive user interface
* Background UI styling and modern layout

---

## Project Structure

```
toy-store-website
│
├── frontend
│   ├── index.html
│   ├── cart.html
│   ├── checkout.html
│   ├── style.css
│   └── script.js
│
├── backend
│   └── Spring Boot Project
│
├── database
│   └── toy_store_database.sql
│
└── README.md
```

---

## Database Setup

1. Open **MySQL Workbench**
2. Create a database:

```
CREATE DATABASE toy_store;
```

3. Import the SQL file located in:

```
database/toy_store_database.sql
```

This will create all required tables and insert product data.

---

## Backend Setup

1. Open the Spring Boot project in your IDE (IntelliJ / Eclipse / VS Code).
2. Configure database connection in:

```
application.properties
```

Example:

```
spring.datasource.url=jdbc:mysql://localhost:3306/toy_store
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

3. Run the Spring Boot application.

The backend API will start at:

```
http://localhost:8080
```

---

## API Endpoint Example

Get all products:

```
GET http://localhost:8080/api/products
```

---

## How to Run the Project

1. Start MySQL server
2. Import the database file
3. Run the Spring Boot backend
4. Open `index.html` in a browser
5. Browse products and test the cart and checkout features

---

## Author

Sachini Kavindya
University Assignment Project

---



