# Sustainability Tracker Project

Full-stack application to track sustainability actions using Node.js/Express backend and Angular frontend.

[Click here to see Live Preview](https://sustainability-tracker-one.vercel.app/)

## Project Structure
```
sustainability-tracker/
├── backend/
│   ├── app.js
│   ├── data.json
│   ├── package.json
│   └── README.md
└── sustainability-tracker/
    ├── src/
    │   ├── app/
    │   │   ├── sustainability-tracker.component.ts
    │   │   ├── sustainability.service.ts
    │   │   ├── app.component.ts
    │   │   ├── app.routes.ts
    │   │   └── app.module.ts
    │   ├── index.html
    │   └── main.ts
    ├── package.json
    └── README.md
```

## Setup Instructions

### Backend
1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install express cors
```

3. Start server:
```bash
node app.js
```
Server runs on `http://localhost:3000`

### Frontend
1. Navigate to frontend directory:
```bash
cd sustainability-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start Angular development server:
```bash
ng serve
```
Access application at `http://localhost:4200`

## Features
- RESTful API endpoints
- JSON file-based data storage
- Angular frontend with form submission
- Real-time data updates
- Error handling

## API Endpoints
- GET `/api/actions`: Retrieve all actions
- POST `/api/actions`: Add new action
```json
{
  "action": "Action Name",
  "date": "YYYY-MM-DD",
  "points": 100
}
```

## Tech Stack
- Backend: Node.js, Express.js
- Frontend: Angular
- Data Storage: JSON file
- HTTP Communication: CORS enabled

## Testing
- Backend: Use Postman for API testing
- Frontend: Built-in Angular testing tools