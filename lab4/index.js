var express = require('express');

const SERVER_PORT = 8089;
var app = express()

// static middleware
app.use(express.static("./public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// GET /hello
app.get("/hello", (req, res) => {
    res.type("text/plain").send("Hello Express JS");
});

// GET /user?firstname=&lastname=
app.get("/user", (req, res) => {
    const firstname = req.query.firstname || "Fidan";
    const lastname = req.query.lastname || "Zeynalli";
    res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname
app.post("/user/:firstname/:lastname", (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

// POST /users  (expects an array of { firstname, lastname })
app.post("/users", (req, res) => {
    const users = Array.isArray(req.body) ? req.body : [];
    res.json(users);
});

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`);
})