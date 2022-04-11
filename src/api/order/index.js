 import { Router } from 'express'
 import {checkAuth} from '../helpers'

 import {
  OrderCreate,
 
  OrderAccept,
  OrderReadyForPickup,
  orderpicked,
  orderdelivered,
   index,
   show,
   update,
   destroy,
   searchorder,
   
  
 } from './controller'

 const router = new Router()

 //POST Request http://localhost:9090/order
router.post('/',checkAuth(true, ['CUSTOMER']), OrderCreate)

 //POST Request http://localhost:9090/order/accept-order/123
router.put('/accept-order/:id',checkAuth(true,['RESTAURANTADMIN']), OrderAccept)

 //POST Request http://localhost:9090/order/ready-for-pickup/123
router.put('/ready-for-pickup/:id',checkAuth(true,['RESTAURANTADMIN']), OrderReadyForPickup)

 //POST Request http://localhost:9090/order/pickup-order/123
router.put('/pickup-order/:id',checkAuth(true,['ADMIN']),orderpicked)

 //POST Request http://localhost:9090/order/order-deliver/123
router.put('/order-delivered/:id',checkAuth(true,['ADMIN']), orderdelivered)


// // //PUT Request http://localhost:9090/order/123
  //  router.put('/:id', update)

// //GET Request http://localhost:8080/order/search
  router.get('/search', searchorder)

// //GET Request http://localhost:9090/order
 router.get('/',checkAuth(true), index)

// //GET Request http://localhost:9090/order/123
  router.get('/:id', show)

// //DELETE Request http://localhost:9090/order/123
  router.delete('/:id', destroy)


export default router
