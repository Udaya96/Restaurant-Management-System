 import rating from './model'


export const create = (req, res) => {
    rating.create(req.body, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  }

//   export const show = (req, res) =>
//   RestaurantAdmin.findById(req.params.id, (err, result) => {
//      if (err) {
//        res.send(err);
//      } else {
//        res.send(result);
//      }
//    })
 
//   export const index = (req, res) =>
//    sendAllRestaurantAdmin(res);
 
//   export const searchRestaurantAdmin = (req, res) => {
//    console.log(req.query);
//    RestaurantAdmin.find( req.query, (err, results) => {
//      if (err) {
//        res.send(err);
//      } else {
//        res.send(results);
//      }
//    })
//  }
 
//  export const update = (req, res) => {
//     RestaurantAdmin.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
//      if (err) {
//        res.send(err);
//      } else {
//        res.send(updatedObj);
//      }
//    })
//  }
 
//  export const destroy = (req, res) =>
//  RestaurantAdmin.findByIdAndRemove(req.params.id, (err, deletedObj) => {
//      if (err) {
//        res.send(err);
//      }
//      else {
//        res.send(deletedObj);
//      }
//    }); 
 
//    const sendAllRestaurantAdmin = (res) => {
//     RestaurantAdmin.find((er, restaurant) => {
//        if (!er) {
//          res.send(restaurant);
//        } else {
//          res.send(er);
//        }
//      })
//    }





