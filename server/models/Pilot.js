const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const PilotSchema = new Schema({
    PilotName:{
        type: String,
        required: true,
    },
    Age:{
        type: Number,
        required: true,
    },
    Biography:{
        type: String,
        required: true,
    },
})
const Pilot = mongoose.model('pilots', PilotSchema);
module.exports = Pilot;