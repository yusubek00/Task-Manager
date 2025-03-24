const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

const taskRoutes = require('./routes/tasks');
app.use(taskRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend is running at PORT ${PORT}`)
});

