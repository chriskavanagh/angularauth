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

//authenticate input against database
/* UserSchema.statics.authenticate = function (email, password, callback) {
    User.findOne({ email: email })
      .exec(function (err, user) {
        if (err) {
          return callback(err)
        } else if (!user) {
          var err = new Error('User not found.');
          err.status = 401;
          return callback(err);
        }
        bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) {
            return callback(null, user);
          } else {
            return callback();
          }
        })
      });
  }; */

UserSchema.plugin(require('mongoose-bcrypt')); // from mongoos-bcrypt docs
module.exports = mongoose.model('User', UserSchema);