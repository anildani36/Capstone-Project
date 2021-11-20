const mongoose = require("mongoose");

// User Schema Declaration
const teamSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    role : {
        type: String,
        required: true,
    },
    skills: [
        {
            technologyName: String
        }
    ],
    github : {
        link: String,
        unique: true
    },
    linkedin : {
        link: String,
        unique: true
    }
})

//creating new collection in db
const teamInfo = new mongoose.model("teamInfo", teamSchema);
module.exports = teamInfo;