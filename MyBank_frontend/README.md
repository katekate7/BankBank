# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Project Setup Guide

This guide will walk you through the steps to **clone**, **install**, **set up**, and **run** your project consisting of a **React + Vite** frontend and a **Symfony** backend, both containerised using **Docker**.

---

## Prerequisites

Before you start, ensure that you have the following installed on your system:

- **Docker** (including Docker Compose)
- **Git**
- **PHP** (for Symfony backend)
- **Composer** (for managing PHP dependencies)

You can download and install Docker from [Docker's official website](https://www.docker.com/get-started).

---

## Step 1: Clone the Repository

Start by cloning the project repository to your local machine:

1. Clone the repository:

    ```bash
    git clone https://github.com/katekate7/BankBank
    ```

2. Change into the project directory:

    ```bash
    cd MyBank
    ```

---

## Step 2: Build and Start Docker Containers

This project uses **Docker** to containerise both the **frontend** (React + Vite) and the **backend** (Symfony). Docker Compose is used to manage all the services.

### 2.1 Start the Containers

In the project root directory, run the following command to **build and start** the Docker containers:

```bash
docker-compose up --build

## Step 3: Access the Frontend (React + Vite)

After the containers are running, the React frontend will be available at:

http://localhost:3000

## Step 4: Access the Backend (Symfony)

The Symfony backend will be available at:

```Arduino
http://localhost:8000

## Step 5: Database Setup (MySQL/PostgreSQL)

If your project uses a database, Docker Compose should automatically handle the database setup when starting the containers.

### 5.1 Accessing the Database

Check your `docker-compose.yml` file to see which database you're using (e.g., MySQL or PostgreSQL). By default, it will be available at:

- **MySQL**: `localhost:3306`

### 5.2 Database Credentials

You can find the database credentials (username, password, and database name) in the `.env` file or `docker-compose.yml` file. Make sure to configure the backend to use the correct credentials.

## Step 6: Stopping the Containers

To stop the running containers, use the following command in the project root directory:

```bash
docker-compose down

Recherches internet :
https://symfony.com/doc/current/setup.html
https://symfony.com/doc/current/security.html
https://symfony.com/doc/current/doctrine.html
