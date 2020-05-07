const mongoose = require('mongoose');
const Schema = mongoose.Schema;  // for mongoose schema usage

//mongoose schema usage create model   
const userSchema = new Schema ({    //=================================(1 option)

    firstName: {
        type: String,
        require: true,
        minlength: 4,
        trim: true
    },
    lastName: {
        type: String,
        require: true,
        minlength: 4,
        trim: true
    },

    isActive: {
        type:Number,
        default: 0
    }


});
//finish mongoose model for schema example

const User = mongoose.model('userModel',{   // =================================(2 option)

    firstName: {
        type: String,
        require: true,
        minlength: 4,
        trim: true
    },
    lastName: {
        type: String,
        require: true,
        minlength: 4,
        trim: true
    },

    isActive: {
        type:Number,
        default: 0
    }


});
//1st for schema based
module.exports = mongoose.model('userSchema01', userSchema);   // this 1st param = userSchema01 is "collection name" and other nam is schemea const model name===========(1 option)

//non schema
// module.exports =  User;  //  other method is   ====>             model.exports =  {User}; ===============================================(2 option)