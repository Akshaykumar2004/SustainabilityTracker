// const express = require('express');
// const fs = require('fs').promises;
// const cors = require('cors');
// const path = require('path');

// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(cors({ origin: "*" }));

// // Path to data file
// const DATA_PATH = path.join(__dirname, 'data.json');

// // GET endpoint to fetch sustainability actions
// app.get('/api/actions', async (req, res) => {
//     try {
//         const data = await fs.readFile(DATA_PATH, 'utf8');
//         res.json(JSON.parse(data));
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to read actions' });
//     }
// });

// // POST endpoint to add a new sustainability action
// app.post('/api/actions', async (req, res) => {
//     try {
//         const { action, date, points } = req.body;

//         // Validate input
//         if (!action || !date || points === undefined) {
//             return res.status(400).json({ error: 'Missing required fields' });
//         }

//         // Read existing data
//         const data = await fs.readFile(DATA_PATH, 'utf8');
//         const actions = JSON.parse(data);

//         // Generate new ID
//         const newId = actions.length > 0 ? 
//             Math.max(...actions.map(a => a.id)) + 1 : 
//             1;

//         // Create new action
//         const newAction = {
//             id: newId,
//             action,
//             date,
//             points
//         };

//         // Add new action
//         actions.push(newAction);

//         // Write updated data back to file
//         await fs.writeFile(DATA_PATH, JSON.stringify(actions, null, 2));

//         res.status(201).json(newAction);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to add action' });
//     }
// });

// // GET endpoint to say hi
// app.get('/', (req, res) => {
//     res.json({ message: 'Hi there!' });
// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
const express = require("express");
const fs = require("fs").promises;
const cors = require("cors");
const path = require("path");

const app = express();

// ✅ PROPER CORS CONFIGURATION
app.use(cors({ 
    origin: "*", // Change to "http://localhost:4200" if needed
    methods: "GET,POST,OPTIONS",
    allowedHeaders: "Content-Type"
}));

app.use(express.json());

// Path to data file
const DATA_PATH = path.join(__dirname, "data.json");

// ✅ GET endpoint to fetch sustainability actions
app.get("/api/actions", async (req, res) => {
    try {
        const data = await fs.readFile(DATA_PATH, "utf8");
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: "Failed to read actions" });
    }
});

// ✅ POST endpoint to add a new sustainability action
app.post("/api/actions", async (req, res) => {
    try {
        const { action, date, points } = req.body;

        if (!action || !date || points === undefined) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const data = await fs.readFile(DATA_PATH, "utf8");
        const actions = JSON.parse(data);

        const newId = actions.length > 0 ? Math.max(...actions.map(a => a.id)) + 1 : 1;

        const newAction = { id: newId, action, date, points };

        actions.push(newAction);
        await fs.writeFile(DATA_PATH, JSON.stringify(actions, null, 2));

        res.status(201).json(newAction);
    } catch (error) {
        res.status(500).json({ error: "Failed to add action" });
    }
});

// ✅ Test route
app.get("/", (req, res) => {
    res.json({ message: "Hi there! CORS should now work!" });
});

module.exports = app;

// Start server
app.listen(3000, () => {
    console.log(`Server running on http://localhost:${3000}`);           
});
