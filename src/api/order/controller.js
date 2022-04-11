
import order from './order.model'
// const SendErrorResponse = (res,code,message) =>{
//   res.status(code)
//   res.send({error: true,message})
// }

export const OrderCreate = (req, res) => {
  order.create(req.body, (err,result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
})
}

export const OrderAccept =(req,res)=>{
   order.findByIdAndUpdate(req.params.id, req.body,{ new: true,}, (err, updatedObj)=>{
    if (err) {
     res.status(401).json({
       message:"REJECTED "
     });
 
    }else{
   
      res.status(201).json({
        message:"Accepted"
      })
    }
   
  })
}
  
export const OrderReadyForPickup = (req, res) => {
  order.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.status(401).json({
        message:"Not Ready For Pickup"
      });
     }else{
   
  
       res.status(201).json({
         message:"READY-FOR-PICK"
       })
     }
  })
}

export const orderpicked = (req, res) => {
  order.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err)
      res.status(401).json({
        message:"Not Picked"
      })
  
    } else {
      console.log(req.body.id)
       
       
      res.status(201).json({
        message:"PICKED-UP"
      })
     
    }
  })
}

export const orderdelivered = (req, res) => {
  order.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err)
      res.status(400).json({
        message:"Not Delivered"
      })
     
    } else {
    
      res.status(201).json({
        message:"DELIVERED"
      })
      
    }
  })
}
    
 
 






export const show = (req, res) =>
order.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })

 export const index = (req, res) =>{
  sendAllorder(res);
 }
export const searchorder = (req, res) => {
  console.log(req.query);
  order.find( req.query, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

export const update = (req, res) => {
  order.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const destroy = (req, res) =>
order.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  }); 


  const sendAllorder = (res) => {
    order.find().populate('RestaurantId').then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
     
  }