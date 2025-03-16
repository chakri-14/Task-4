# 🌦️ WeatherApp

This project is a full-stack weather application with separate frontend and backend components.

## Project Structure

```
WeatherApp/
├── FRONTEND/   # React.js frontend
├── BACKEND/    # Node.js + Express.js backend
└── README.md   # Project documentation
```

---

# Backend Setup

## Prerequisites

- Install [Node.js](https://nodejs.org/)

## Installation

1. Navigate to the backend folder:
   ```sh
   cd BACKEND
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the following variables:
   ```
   PORT=5000
   API_KEY=your_weather_api_key_here
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

## Technologies Used

- Node.js
- Express.js
- Axios (for API calls)
- Dotenv
- Cors

---

# Frontend Setup

## Prerequisites

- Install [Node.js](https://nodejs.org/)

## Installation

1. Navigate to the frontend folder:
   ```sh
   cd FRONTEND
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm start
   ```

## Technologies Used

- React.js
- React Router
- Axios (for API calls)



---

# Running the Application

1. Start the backend server (`npm start` in `BACKEND` folder).
2. Start the frontend server (`npm start` in `FRONTEND` folder).
3. Open [http://localhost:3000](http://localhost:3000) in a browser to use the application.

---

# API Endpoints (Backend)

| Method | Endpoint       | Description                         |
| ------ | -------------- | ----------------------------------- |
| GET    | /weather?city= | Fetch weather data for a given city |

---

# Deployment

To deploy the application, host the frontend on **Vercel/Netlify** and the backend on **Render/Heroku**.

