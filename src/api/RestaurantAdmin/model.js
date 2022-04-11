import mongoose from 'mongoose'

const restaurantschema = new mongoose.Schema({
    Userid: {
        type: String,
        required: true,
        type: mongoose.SchemaTypes.ObjectId,
        ref:'users'
    },

    restaurantname: {
        type: String,
        required: true
    },


    restauranttype: {
        type: String,
        required: true,
        enum: ['DINEIN', 'TAKE-AWAY']
    },
    cuisinetype: {
        type: String,
        required: true,
        enum:['CHINESE','ITALIAN','INDIAN','MEXICAN']

    },

    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    openingtime: {
        type: String,
        required: true,
        default: '10am'
    },
    closingtime: {
        type: String,
        required: true,
        default: '9pm'
    },

}, {
    timestamps: true
})

const model = mongoose.model('Restaurant', restaurantschema)

export default model