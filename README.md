# Product API with Search, Filter, Sort & Pagination

This is a powerful and flexible **RESTful API** built using **Node.js**, **Express**, and **MongoDB**, designed to manage and retrieve product data with advanced querying features.

## Features

- 🔍 **Search** by product name
- 🏷️ **Filter** by company and price range
- 🔃 **Sort** by name or price (ascending/descending)
- 📄 **Pagination** to limit and skip results
- 🌐 **REST API** built with Express.js
- 💾 **MongoDB** as the database for storing product data

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Environment:** Postman for testing endpoints

## Endpoints Overview

- `GET /products` → Get all products
- `GET /products?search=phone` → Search by name
- `GET /products?company=apple` → Filter by company
- `GET /products?price=apple` → Filter by company
- `GET /products?select=price` → Sort by price
- `GET /products?page=2&limit=10` → Pagination support

## Setup Instructions

## 1. Clone the repository:
   bash
   https://github.com/RahulKumarsingh2001/Rest-API-01
   cd your-repo-name

## 2. Install dependencies:
 npm install

## 3.Set up your .env file with the following variables:
  MONGODB_URI=your_mongodb_connection_string
  PORT=5000
## 4. Run the application:
  npm start
