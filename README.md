# Development - link
       https://chatmapp.onrender.com/

# Chat Matrix

This is a MERN stack chat application, built with MongoDB, Express.js, React, and Node.js. The application allows users to chat in real-time using Socket.io and provides a responsive, user-friendly interface with the help of Chakra UI.

## Table of Contents

- [Development - link](#development---link)
- [Chat Matrix](#chat-matrix)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Scripts](#scripts)
  - [Dependencies](#dependencies)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [License](#license)

## Features

- Real-time messaging with Socket.io
- User authentication with JWT
- Responsive UI using Chakra UI
- Notifications for new messages
- User-friendly interface

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Gourav830/chatMapp.git
   cd chat-app
   ```

2. Install backend dependencies:

   ```bash
   npm install --legacy-peer-deps
   ```

3. Install frontend dependencies:

   ```bash
   npm install --legacy-peer-deps --prefix frontend
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   PORT=5000
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_secret_key
   ```

## Usage

To start the application, run the following commands:

1. Start the backend server:

   ```bash
   npm run server
   ```

2. Start the frontend development server:

   ```bash
   npm start --prefix frontend
   ```

The application will be accessible at `http://localhost:3000`.

## Scripts

- `start`: Starts the backend server.
- `server`: Starts the backend server with nodemon.
- `build`: Installs dependencies and builds the frontend.

## Dependencies

### Backend

- `bcryptjs`: ^2.4.3
- `colors`: ^1.4.0
- `dotenv`: ^9.0.2
- `express`: ^4.17.1
- `express-async-handler`: ^1.1.4
- `jsonwebtoken`: ^8.5.1
- `mongoose`: ^5.12.9
- `nodemon`: ^2.0.7
- `socket.io`: ^4.1.2

### Frontend

- `@chakra-ui/icons`: ^1.0.13
- `@chakra-ui/react`: ^1.6.2
- `@emotion/react`: ^11
- `@emotion/styled`: ^11
- `@testing-library/jest-dom`: ^5.11.4
- `@testing-library/react`: ^11.1.0
- `@testing-library/user-event`: ^12.1.10
- `axios`: ^0.21.1
- `chat-app`: file:..
- `framer-motion`: ^4
- `react`: ^17.0.2
- `react-chips`: ^0.8.0
- `react-dom`: ^17.0.2
- `react-lottie`: ^1.2.3
- `react-notification-badge`: ^1.5.1
- `react-router-dom`: ^5.2.0
- `react-scripts`: 4.0.3
- `react-scrollable-feed`: ^1.3.1
- `socket.io-client`: ^4.1.2
- `web-vitals`: ^1.0.1

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

---

Author: Gourav Singla
