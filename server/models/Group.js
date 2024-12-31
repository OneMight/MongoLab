const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    groupName:{
        type: String,
        required: true,
    },
    desciption:{
        type: String,
        required: true,
    },
    imageGroup:{
        type: String,
        required: true,
    },
})
const Group = mongoose.model('groups', groupSchema);
module.exports = Group;