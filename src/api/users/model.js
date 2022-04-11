import mongoose from 'mongoose'

const userSchema = new mongoose.Schema ({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    newpassword:{
        type:String,
       
    },
     role:{
     type:String,
       required:true,
    //   enum:['CUSTOMER','RESTAURANTADMIN','ADMIN']
        
     }
},{
    timestamps:true
});

const model = mongoose.model('users', userSchema)
export default model