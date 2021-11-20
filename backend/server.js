const express = require("express");
const app = express();

//defining port for server
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes for requests made by user

// Server port listening
app.listen(port, () => {
    console.log(`Sever running at port ${port}`);
})