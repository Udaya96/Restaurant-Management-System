import mongoose from 'mongoose'

const ratingSchema = new mongoose.Schema({
    // Userid: {
    //     type: String,
    //     required: true,
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref:'users'
    // },

    restaurantid: {
        type: String,
        required: true,
        type: mongoose.SchemaTypes.ObjectId,
        ref:'restaurant'
    },


    orderid: {
        type: String,
        required: true,
        type: mongoose.SchemaTypes.ObjectId,
        ref:'order'
    },
    rating: {
        type: Number,
        required: true,
       enum:['1','2','3','4','5']
    },

    feedback: {
        type: String,
        required: true
    }
    

}, {
    timestamps: true
})

const model = mongoose.model('rating', ratingSchema)

export default model