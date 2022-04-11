import mongoose from 'mongoose'

const menuschema = new mongoose.Schema({
itemname:{
      type:String,
      required:true,

},
foodtype:{
    type:String,
    required:true
},
price:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
}

}, {
    timestamps: true
})


const model = mongoose.model('menu', menuschema)

export default model