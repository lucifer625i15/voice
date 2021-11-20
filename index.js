const express = require("express")
const path = require("path")
const app = express();

// relative absolute

// console.log(__dirname + "/assis");

const staticPath = path.join(__dirname);
app.use('/js', express.static(path.join(__dirname, "./node_modules")))
app.use(express.static(staticPath));


app.get("/", (req, res) => { res.send("Main Index File");

});

app.get("/about", (req, res) => {
res.send( "Developed By P2RD Team");
 });


app.listen (8000, () => {
console.log("Ready at 8000");

});