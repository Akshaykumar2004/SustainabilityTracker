# Sustainability Tracker Frontend

Angular frontend for sustainability tracking application.

## Setup

1. Install Angular CLI:
```bash
npm install -g @angular/cli
```

2. Create project:
```bash
ng new sustainability-tracker
cd sustainability-tracker
```

3. Install dependencies:
```bash
npm install @angular/common @angular/forms @angular/router
```

4. Run development server:
```bash
ng serve
```
Navigate to `http://localhost:4200`

## Project Structure
```
src/
├── app/
│   ├── sustainability-tracker.component.ts
│   ├── sustainability.service.ts
│   ├── app.component.ts
│   ├── app.routes.ts
│   └── app.module.ts
├── index.html
└── main.ts
```

## Features
- Display sustainability actions in table
- Add new actions via form
- Real-time updates
- Error handling

## Backend Connection
Ensure backend server is running on `http://localhost:3000`