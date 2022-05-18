const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 4005; //process.env.PORT refers to herokus port number, not ours. the or 4005 means our local port if it's not deployed by heroku

//Let's build the path to our front end files so Heroku can access them.

//Endpoints
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))
})

/*
wHEN hEROKU DEPLOYS OUR APP, IT WILL PROVIDE ITS OWN port number.
This port number is stored on process.env.PORT.

If we are not deploying on Heroku (working on our local machine),
it will then default to port 4005 (just picked 4005 arbitrarily).
*/
app.listen(port, () => {
    console.log(`Listening on ${port}`);
})