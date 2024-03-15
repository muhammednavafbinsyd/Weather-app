# my-weather-app

This Weather App is a web application that allows users to check the weather forecast for different locations. It's built using Vue.js for the frontend, Node.js for the backend, MongoDB for database storage, and Tailwind CSS for styling.

Features
-Location-based Weather Forecast: Users can search for weather forecasts based on location.
-Responsive Design: The app is responsive and works well on various devices.
-Data Persistence: User preferences and search history are stored in a MongoDB database for easy retrieval.
-Real-time Updates: The weather data is fetched from a reliable API, providing accurate and up-to-date information.

Tech Stack
-Frontend: Vue.js
-Backend: Node.js
-Database: MongoDB
-Styling: Tailwind CSS

Getting Started
Prerequisites
Make sure you have Node.js and MongoDB installed on your system.

Installation

1.Clone the repository:
git clone https://github.com/muhammednavafbinsyd/weather-app.git

2.Navigate to the project directory:
cd weather-app
 
3.Install dependencies for both frontend and backend:
cd frontend
npm install

cd ../backend
npm install

4.Start MongoDB:
 npm mongoose

5.Start the backend server:
cd backend
node server.js

6.Start the frontend development server:
cd ../frontend
npm run dev
Open your browser and visit http://localhost:5173 to view the app.

Configuration
You can configure the app by modifying the .env file in the backend directory. Here you can specify the MongoDB connection string, API keys, and other environment variables.

API Used
This app utilizes the Weather API to fetch weather data.


Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1.Fork the repository.
2.Create a new branch (git checkout -b feature/new-feature).
3.Make your changes.
4.Commit your changes (git commit -am 'Add new feature').
5.Push to the branch (git push origin feature/new-feature).
6.Create a new Pull Request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Thanks to the developers of Vue.js, Node.js, MongoDB, and Tailwind CSS for providing such amazing tools and frameworks.




## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
