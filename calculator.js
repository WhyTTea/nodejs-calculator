const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
});

app.post("/", (req,res) => {
    const n1 = Number(req.body.num1);
    const n2 = Number(req.body.num2);

    const result = n1 + n2;
    res.send("The result of the addition is  " + result);

});

app.listen(3000, () => {
    console.log("server started on port 3000.");
}); 