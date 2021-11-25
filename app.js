const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("signin", {});
});
app.get("/signup", (req, res)=>{
    res.render("signup", {});
});



app.listen(3000, () => console.log("Server Started at port 3000"));