# Chatbot Project

## Overview

This project is a floating chatbot widget integrated with a backend API that communicates with Google's Gemini API for generating responses. The frontend uses Vite and React, while the backend is built with Node.js, Express, and Redis. The deployment includes Docker for containerization and a VPS from OVHCloud with Nginx as a reverse proxy.

## Features

### 1. Frontend (Vite + React)

- **Floating Chatbot Widget**: Appears at the bottom-right of the webpage with a toggle button to show/hide the chat window.
- **Chat Window**:
  - Heading
  - Conversation area
  - Input field
  - Send button
- **Animations**: Smooth opening and closing of the chat window and animated message bubbles.

### 2. Backend (Node.js + Express + Gemini API + Redis)

- **API Endpoints**:
  - `GET /chat`: Initializes the user session and loads conversation history (if any).
  - `POST /chat`: Receives user input and sends the query to Gemini's API, then returns the response.
  
- **Session Management**: Uses Redis to store user sessions and conversation history.

- **Gemini API Integration**: Leverages the `@google/generative-ai` package for generating chatbot responses.

### 3. Deployment (Docker, VPS from OVHCloud, Nginx)

- **VPS**: Ubuntu VPS on OVHCloud hosts the frontend and backend.
- **Dockerization**: Both frontend and backend are containerized using Docker and managed via Docker Compose.
- **Nginx**: Configured as a reverse proxy for routing traffic to the frontend and backend services.

---

## How to Run the Application

### Option 1: Running with Docker

#### Requirements:
- Docker and Docker Compose installed on your machine.

#### Steps:
1. Clone the repository or download the project files.
2. In the project root directory, run the following command to build and start all services:
    ```bash
    docker-compose up -d --build
    ```
3. Once the containers are running, open your browser and visit the application:
    - Frontend: [http://localhost:3000](http://localhost:3000)
    - Backend API: [http://localhost:4000](http://localhost:4000)

### Option 2: Running Without Docker

#### Requirements:
1. **Node.js** (version > 18 recommended).
2. **Redis** server running locally or remotely.
3. **Git** (optional, you can also download the project as a ZIP file).

#### Steps:
1. Clone the repository or download and unzip the project files.
2. **Backend**:
    - Navigate to the `backend-chatbot` folder:
        ```bash
        cd backend-chatbot
        ```
    - Install dependencies and run the backend server:
        ```bash
        yarn install
        yarn dev
        ```
3. **Frontend**:
    - Navigate to the `frontend-chatbot` folder:
        ```bash
        cd frontend-chatbot
        ```
    - Install dependencies and start the frontend server:
        ```bash
        yarn install
        yarn dev
        ```
4. Open your browser and visit the application:
    - Frontend: [http://localhost:3000](http://localhost:3000)
    - Backend API: [http://localhost:4000](http://localhost:4000)

---

## Deployment Notes

- **Docker**:
  - Dockerize both the frontend (React app using Vite) and backend (Node.js + Express) by creating separate `Dockerfile`s.
  - Use `docker-compose` to manage both services and the Redis container for session management.
  
- **Nginx**:
  - Nginx serves as a reverse proxy to route frontend requests to the React application and API requests to the backend.

- **Redis**:
  - Redis is used for session management and storing chat history for a seamless user experience.


### References links
[text](https://www.npmjs.com/)
[text](https://github.com/google-gemini/generative-ai-js)

#### Production links

[text](http://thuvodev.online/)