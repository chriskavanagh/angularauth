const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create ninja Schema.
const NinjaSchema = new Schema({
    name:{
        type:String,
        required:[true, "Name Is Required"]
    },
    rank:{
        type:String
    },
    available:{
        type: Boolean,
        default: false
    },
    date:{
        type: Date,
        default: Date.now
    }       
    
},
    { 
    timestamps:{     
        createdAt: 'created_at' 
    } 
}); // end NinjaSchema

const Ninja = mongoose.model('ninja', NinjaSchema);
module.exports = Ninja;