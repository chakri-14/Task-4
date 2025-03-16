# 🌦️Weather App with Redux & API Integration

## 📌 Project Overview

This project is a **Weather App** that fetches real-time weather data from the **OpenWeather API**. It is built using **React (Vite)** for the frontend and **Redux Toolkit** for state management. The app allows users to enter a city name and fetch current weather details. The project follows a modular structure, implementing best practices for state management and API handling.

---

## 🛠 Technologies Used

### **Frontend:**

- **React (Vite)** – Fast and optimized React framework
- **Redux Toolkit** – For global state management
- **Axios** – To fetch data from OpenWeather API
- **CSS3** – For styling and UI enhancements

### **Backend:** (Not Implemented in This Project)

- If required, Node.js & Express can be added later

### **External APIs:**

- **OpenWeather API** – To fetch weather data based on user input

---

## 🚀 Installation & Setup

Follow these steps to set up and run the project locally.

### 🔹 1️⃣ Clone the Repository

```bash
git clone https://github.com/chakri-14/your-repo-name.git
cd your-repo-name
```

### 🔹 2️⃣ Install Dependencies

#### **Frontend Setup (React + Vite)**

```bash
cd FRONTEND
npm install
```

#### **Install Additional Packages**

```bash
npm install @reduxjs/toolkit react-redux axios
```

### 🔹 3️⃣ Set Up Environment Variables

1. Create a `.env` file inside `FRONTEND` and add your **OpenWeather API key**:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

### 🔹 4️⃣ Start the Development Server

#### **Run Frontend (React + Vite)**

```bash
npm run dev
```

---

## 🎯 Features Implemented

✅ Fetches real-time weather data using OpenWeather API\
✅ Uses **Redux Toolkit** to manage state efficiently\
✅ Implements actions and reducers for state management\
✅ Uses `createAsyncThunk` for API requests\
✅ Displays weather details including temperature, humidity, and wind speed\
✅ Integrated Redux DevTools for debugging\


---

## 📢 Deployment (Optional)

To deploy the frontend, use **Vercel**:

```bash
npm run build
vercel
```

---

## 📝 Author

👤 **M. Chakralikith**\
🔗 GitHub: [chakri-14](https://github.com/chakri-14)

---

## 🔥 Next Steps

- Improve UI using **TailwindCSS** or **Material-UI**
- Implement a **5-day weather forecast feature**
- Add **local storage support** for recent searches
- Introduce **unit testing with Jest**
- Optimize API calls to reduce unnecessary requests

🚀 **Happy Coding!** 😊



