import mongoose from 'mongoose'

const orderschema = new mongoose.Schema({

    RestaurantId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'Restaurant',
        required: true
    },
    items:[ {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'menu',
        required: true
    }],
   
    
    deliveryaddress:{
        type:String,
        required:true
    },
    paymentoption:{
        type:String,
        required:true,
        enum:['ONLINE','CASH']
    },
    orderstatus:{
        type:String,
        required:true,
         default:'CREATED',
        enum:['CREATED','ACCEPTED','REJECTED','CANCELLED','READY-FOR-PICK','PICKED-UP','DELIVERED']
    },
        
// logs:[
//     String //use mongoose push method to write log
// ]
},{
    timestamps:true
})
const model = mongoose.model('order', orderschema)

export default model