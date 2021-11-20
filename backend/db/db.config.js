const mongoose = require("mongoose");

const db = "mongodb+srv://admin:4cvK676eSwe6BiUx@cluster0.f5ftq.mongodb.net/Capstone?retryWrites=true&w=majority"

//port & db name declaration for mongo db 
mongoose.connect(db, {
    useNewUrlParser:true
}).then(() => {
    console.log(`Connected to DataBase`);
}).catch((error) => {
    console.log(`No connection`,error);
})