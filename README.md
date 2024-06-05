# Poll App

![Poll App](https://github.com/AMITSINHA577/pollApp/blob/main/PollAppIMG.png)

This is a web application designed for creating and voting on polls. It allows users to generate polls without logging in, but requires registration and login to vote. The application leverages Angular for the frontend, Spring Boot for the backend, and PostgreSQL for data storage.

## Table of Contents

- [Project Description](#project-description)
- [Key Features](#key-features)
- [Advanced Features](#advanced-features)
- [Benefits](#benefits)
- [Target Audience](#target-audience)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)

## Project Description

Poll App is a comprehensive polling application where users can create polls and participate in voting. The app is designed to be intuitive and user-friendly, allowing anyone to create polls without needing an account. However, to vote on polls, users must register and log in. This ensures that voting is fair and transparent.

## Key Features

- **Poll Creation**: Users can create polls with multiple options without needing an account.
- **User Authentication**: Secure registration, login, and logout functionality.
- **Voting**: Only registered and logged-in users can vote on polls.
- **Real-Time Results**: View poll results as votes are cast.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Advanced Features

- **Admin Panel**: Manage polls, users, and monitor activity.
- **Email Notifications**: Users receive email notifications for important actions like registration, poll creation, and voting.
- **Data Analytics**: Advanced analytics to track poll engagement and user activity.
- **Export Results**: Export poll results to CSV for further analysis.

## Benefits

- **Ease of Use**: Intuitive interface for both poll creators and voters.
- **Security**: Robust authentication mechanisms to ensure secure access and voting.
- **Scalability**: Easily scalable to handle a large number of users and polls.
- **Real-Time Interaction**: Instant updates on poll results for an engaging user experience.

## Target Audience

- **Individuals**: Anyone interested in creating and participating in polls.
- **Businesses**: Companies seeking feedback from employees or customers.
- **Educational Institutions**: Schools and universities conducting surveys and polls.
- **Community Groups**: Organizations looking to gather opinions from members.

## Technology Stack

- **Frontend**: Angular
- **Backend**: Spring Boot
- **Database**: PostgreSQL
- **Others**: HTML, CSS, JavaScript, RESTful API

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- Java Development Kit (JDK) installed
- PostgreSQL installed and running

### Steps

1. **Frontend Setup**

    a. Clone the repository:
    ```bash
    git clone https://github.com/AMITSINHA577/pollApp
    ```

    b. Install dependencies:
    ```bash
    npm install
    ```

    c. Run the Angular development server:
    ```bash
    ng serve
    ```

    The frontend will be available at `http://localhost:4200`.

2. **Backend Setup**

    a. Navigate to the backend directory:
    ```bash
    cd ../backend
    ```

    b. Configure the PostgreSQL database connection in `application.properties`:
    ```properties
    spring.datasource.url=jdbc:postgresql://localhost:5432/your-database
    spring.datasource.username=your-username
    spring.datasource.password=your-password
    spring.jpa.hibernate.ddl-auto=update
    ```

    c. Build and run the Spring Boot application:
    ```bash
    ./mvnw spring-boot:run
    ```

    The backend will be available at `http://localhost:8080`.

3. **Database Setup**

    a. Create a PostgreSQL database:
    ```sql
    CREATE DATABASE your-database;
    ```

    b. Configure the database user with the necessary permissions.

## Usage

### Accessing the Application

1. Open your web browser and go to `http://localhost:4200`.

### Registering a New User

1. Click on the "Register" button.
2. Fill in the registration form and submit.

### Logging In

1. Click on the "Login" button.
2. Enter your credentials and submit.

### Creating a Poll

1. Click on the "Create Poll" button.
2. Fill in the poll details and submit.

### Voting on a Poll

1. Find the poll you want to vote on.
2. Click on the "Vote" button (requires login).

