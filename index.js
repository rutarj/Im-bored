import express from "express"; // Importing Express framework
import bodyParser from "body-parser"; // Importing body-parser to parse form data
import axios from "axios"; // Importing Axios for making HTTP requests

const app = express(); // Creating an instance of Express
const port = 3000; // Setting the port number

app.use(express.static("public")); // Serving static files from the "public" directory
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded data

// GET route for the root URL
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random"); // Fetch a random activity from the API
    const result = response.data; // Extracting data from the response
    res.render("index.ejs", { data: result }); // Render the index.ejs file with the fetched data
    console.log(result); // Log the result for debugging
  } catch (error) {
    console.error("Failed to make request:", error.message); // Log error message
    res.render("index.ejs", { error: error.message }); // Render the index.ejs file with the error message
  }
});

// POST route for handling form submissions
app.post("/", async (req, res) => {
  try {
    console.log(req.body); // Log form data for debugging
    const type = req.body.type; // Get the selected activity type
    const participants = req.body.participants; // Get the number of participants
    const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`); // Fetch filtered activities from the API
    const result = response.data; // Extracting data from the response
    console.log(result); // Log the result for debugging
    res.render("index.ejs", { data: result[Math.floor(Math.random() * result.length)] }); // Render the index.ejs file with a random activity from the filtered results
  } catch (error) {
    console.error("Failed to make request:", error.message); // Log error message
    res.render("index.ejs", { error: "No activities that match your criteria." }); // Render the index.ejs file with an error message
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`); // Log the running status of the server
});
