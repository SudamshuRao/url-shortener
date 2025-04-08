# Distributed URL Shortener

A full-stack URL shortening service built with Node.js, Express, PostgreSQL, and Sequelize, featuring real-time click analytics and an EJS-powered admin dashboard.

## Features

- Short URL generation with unique Base62 short codes
- Persistent storage using PostgreSQL and Sequelize ORM
- Click analytics tracking:
  - Visitor IP address
  - User-Agent (browser/device)
  - Timestamp of visit
- Admin dashboard built with EJS to view:
  - All short URLs
  - Total click counts
- REST API endpoints with Express.js
- Clean, modular architecture

## Tech Stack

- Backend: Node.js, Express.js
- Database: PostgreSQL, Sequelize ORM
- Templating: EJS
- Developer Tools: Git, npm, pgAdmin, Sequelize CLI

## Project Structure


├── config/ # Sequelize DB config ├── migrations/ # DB schema migrations ├── models/ # Sequelize models ├── src/ │ ├── controllers/ # Route handlers │ ├── routes/ # Express routers │ ├── utils/ # Utility functions (e.g., URL generator) │ ├── views/ # EJS templates │ └── app.js # Main app entry point ├── .gitignore ├── Dockerfile # (Optional) For containerized deployment ├── package.json



## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SudamshuRao/url-shortener.git
cd url-shortener


### 2. Install Dependencies 
npm install

### 3. Setup PostgreSQL
Ensure PostgreSQL is installed and running.
Update your database credentials in config/config.json.

### 4. Run Migrations
npx sequelize-cli db:migrate

### 5. Start the Server
npm start

Visit the dashboard at:
http://localhost:3000/dashboard

Future Improvements
Add URL expiration logic
Implement rate limiting per IP
React-based dashboard frontend
Visualize click activity with charts


Author
Developed by Sudamshu S Rao
https://github.com/SudamshuRao


