const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppSchema = new Schema({
    title : String,
    message : String,
    dateCreated : 
    {
        type : Date,
        default : Date.now
    }
})

const App = mongoose.model('App', AppSchema);

module.exports = App;