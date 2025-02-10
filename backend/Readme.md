# Sustainability Tracker Backend

Node.js/Express backend for tracking sustainability actions.

## Setup

1. Install dependencies:
```bash
npm install express cors
```

2. Create `data.json` file in root directory:
```json
[
  {
    "id": 1,
    "action": "Carpooling",
    "date": "2025-01-08",
    "points": 50
  }
]
```

3. Start server:
```bash
node app.js
```

## API Endpoints

- `GET /api/actions`: Get all sustainability actions
- `POST /api/actions`: Add new action
  ```json
  {
    "action": "Action Name",
    "date": "YYYY-MM-DD",
    "points": 100
  }
  ```

## File Structure
```
backend/
├── app.js
├── data.json
├── package.json
└── README.md
```

## Dependencies
- Express.js
- CORS

## Error Handling
- 400: Missing required fields
- 500: Server/file operation errors