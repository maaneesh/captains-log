const express = require('express');
const app = express();
const PORT = 5003;



//setting up view engine
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());






//ROUTES
//Home

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
})

app.get("/", (req, res) => {
    res.send(`  <h1>Hello World</h1>`);
  });

