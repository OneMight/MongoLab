const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamName:{
        type: String,
        required: true,
    },
    desciption:{
        type: String,
        required: true,
    },
    photoTeam:{
        type: String,
        
    },
})
const Team = mongoose.model('teams', teamSchema);
module.exports = Team;