# Lampros Katsaros — Portfolio

Personal portfolio website built with HTML, CSS, JavaScript, and a Node.js/Express backend connected to MongoDB.

## Pages

- **Home** (`index.html`) — About me section and recent projects overview (last 3 projects)
- **Projects** (`projects.html`) — Full list of all projects

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Dev Tools:** nodemon, dotenv

## Project Structure

```
Portofolio/
├── client/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── index.js
│   │   └── projects.js
│   ├── assets/
│   │   └── images/
│   ├── index.html
│   └── projects.html
├── server/
│   ├── data/
│   │   └── data.json
│   └── server.js
├── .env
├── package.json
└── README.md
```

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/recent-projects` | Returns the 3 most recent projects |
| GET | `/api/projects` | Returns all projects |

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory:
   ```
   DB_URL=your_mongodb_connection_string
   DB_NAME=your_database_name
   DB_COLLECTION=your_collection_name
   PORT=3000
   ```
4. Start the server:
   ```bash
   npm start        # production
   npm run dev      # development (nodemon)
   ```
5. Open `http://localhost:3000` in your browser

## Links

- [Instagram](https://www.instagram.com/katsaroslampros1)
- [LinkedIn](https://www.linkedin.com/in/lamproskatsaros)
- [GitHub](https://github.com/AvgProgrammer)
