const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
    }

})

const userModel = mongoose.model('userModel', userSchema)

module.exports = userModel