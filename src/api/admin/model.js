import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema ({
     name:{
        type:String,
        required:true
    },
   
    //  orderid:{
    //  type:mongoose.SchemaTypes.ObjectId,
    //    required:true,
    //    ref:"menu"
    //  },
     
},{
    timestamps:true
});

const model = mongoose.model('admin', AdminSchema)
export default model