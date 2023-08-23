const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDatabase = require("./connection");

// Import all routers
const authRouter = require("./routes/user.routes");
const servicesRouter = require("./routes/services.routes");
const projectsRouter = require("./routes/projects.routes");
const teamRouter = require("./routes/team.routes");
const jobsRouter = require("./routes/jobs.routes");
const contactRouter = require("./routes/contact.routes");

// dotEnv Configuration
dotenv.config();

// JSON Configuration
app.use(express.json());

// Cors Configuration
app.use(cors());

// Mongoose Connection
connectToDatabase();

// API's routes
app.use("/api/v1/user", authRouter);
app.use("/api/v1/services", servicesRouter);
app.use("/api/v1/projects", projectsRouter);
app.use("/api/v1/team", teamRouter);
app.use("/api/v1/job", jobsRouter);
app.use("/api/v1/contact", contactRouter);

// Listening to a server
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
