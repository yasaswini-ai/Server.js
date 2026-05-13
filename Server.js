const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
// Import Model
const Project = require("./models/Project");
// Routes
// Get all projects
app.get("/projects", async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});
// Add new project
app.post("/projects", async (req, res) => {
    const newProject = new Project(req.body);
    await newProject.save();
    res.json(newProject);
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
})
npm init -y
