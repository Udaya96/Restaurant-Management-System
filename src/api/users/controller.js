import users from './model';
import md5 from 'md5';
import jwt from 'jsonwebtoken'
export const create = (req, res) => {

  const user ={username:req.body.username,password:md5(req.body.password),role:req.body.role}
  users.create(user, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}


export const checkOldPassword = (req,res,next)=>{
  users.findById(req.user.id,(err,result)=>{
    if(err){
      res.send(err)
    }else{
      if(result.password === md5(req.body.password)){
next();
      }else{
        res.send({err:true,message:"Please Enter Valid OldPassword"})
      }
      res.send(result)
    }
  })

}

export const changePassword = (req,res)=>{
  users.findOneAndUpdate(req.user.id,{ password:md5(req.body.newpassword)}, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const login = (req, res) =>{
  users.findOne({username:req.body.username,password:md5(req.body.password)}, (err, result) => {
   
if (err) {
  res.send(err);
} else {
  if(result){
    const userTokenObj = {
      username: result.username,
      id: result._id,
      role: result.role
    };
    const token = jwt.sign(userTokenObj,'Hidden-Key')
    res.send({error: false,token})
  }
   else{ 
     res.send({ error: true,message: "Invalid Login Credentials"})
    }
   
  
  
}
})
  

}

export const update = (req, res) => {
  users.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
   if (err) {
     res.send(err);
   } else {
     res.send(updatedObj);
   }
 })
}

export const index = (req, res) =>
  sendAllusers(res);

  const sendAllusers = (res) => {
    users.find((er, user) => {
      if (!er) {
        res.send(user);
      } else {
        res.send(er);
      }
    })
  }