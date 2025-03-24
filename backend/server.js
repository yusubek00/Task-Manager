const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

const taskRoutes = require('./routes/tasks');
app.use(taskRoutes);

//      local hosting PORT
// const PORT = 5500;
// app.listen(PORT, () => {
//     console.log(`Backend is running at PORT ${PORT}`)
// });

//Hosting on render.com
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Backend is running at PORT ${PORT}`)
});