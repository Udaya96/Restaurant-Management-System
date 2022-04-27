import mongoose from 'mongoose'

const customerSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
}


})

const model = mongoose.model('customer', customerSchema)

export default model