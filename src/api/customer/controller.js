
import customer from './model';
import md5 from 'md5';
import jwt from 'jsonwebtoken'

export const signup = (req, res) => {

  const customers ={fullname:req.body.fullname,
    email:req.body.email,mobile:req.body.mobile,
   city:req.body.city,
 
    password:md5(req.body.password),role:req.body.role}
    customer.create(customers, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}



  



export const create = (req, res) => {
const customers = req.body;
// customers.createdBy = req.user.id
    customer.create(customers ,(err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
 }
 
// export const ShowMyProfile =(req,res) => 
// customer.findById(req.user.id, (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   })



// export const show = (req, res) =>
// customer.findById(req.params.id, (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   })

// export const index = (req, res) =>{
//   sendAllcustomer(res);
// }

// export const searchcustomer = (req, res) => {
//     console.log(req.query);
//     customer.find( req.query, (err, results) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send(results);
//       }
//     })
//   }

// export const update = (req, res) => {
//     customer.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(updatedObj);
//     }
//   })
// }

// export const destroy = (req, res) =>
// customer.findByIdAndRemove(req.params.id, (err, deletedObj) => {
//     if (err) {
//       res.send(err);
//     }
//     else {
//       res.send(deletedObj);
//     }
//   }); 

//   const sendAllcustomer = (res) => {
//     customer.find((er, customers) => {
//       if (!er) {
//         res.send(customer);
//       } else {
//         res.send(er);
//       }
//     })
//   }