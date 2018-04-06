const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create ninja Schema.
const UserSchema = new Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    email:{
        type:String,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        required:[true, "Email Is Required"]
    },
    password:{
        type:String,
        required: true,
        bcrypt: true
    }    
}); // end UserSchema



UserSchema.plugin(require('mongoose-bcrypt')); // from mongoos-bcrypt docs
module.exports = mongoose.model('User', UserSchema);