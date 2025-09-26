var express = require('express');

const SERVER_PORT = 8089;
var app = express()

// static middleware
app.use("/test", express.static("./public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// http://localhost:8089/
app.get("/", (req, res) => {
    res.status(201).send("<h1>Hello Express JS</h1>")
})

// http://localhost:8089/home
app.get("/home", (req, res) => {
    res.send("Home Page")
});

// http://localhost:8089/person
app.post("/person", (req, res) => {
    const p = {
        pid: 1,
        pnm: "Pritesh Patel"
    }

    res.send(JSON.stringify(p))
})

// http://localhost:8089/person
app.get("/person", (req, res) => {
    const p = {
        pid: 1,
        pnm: "Pritesh Patel",
        city: "Toronto"
    }

    res.json(p)
})

// Path Parameter
// http://localhost:8089/student/pritesh/patel
app.get("/student/:fname/:lname", (req, res) => {
    const {fname, lname} = req.params
    res.send(`Welcome ${fname} ${lname}`)
})

// Query Parameter
// http://localhost:8089/user?fnm=pritesh&lnm=patel
app.get("/user", (req, res) => {
    const {fnm, lnm} = req.query;

    if (!fnm || !lnm) {
        return res.status(400).send("Please provide first name and last name as query parameters.")
    }

    res.send(`${fnm} ${lnm}`)
})

// Get data asa a body parameter
// http://localhost:8089/faculty
app.post("/faculty", (req, res) => {
    let data = req.body; // get body data
    console.log("Received Data: ", data);

    res.json({
        message: "Faculty data received successfully",
        received: data
    })
})

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`);
})