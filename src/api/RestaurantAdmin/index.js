import { Router } from 'express'
import { checkAuth } from '../helpers'
import {
create,
update,
index,
show,
destroy,
searchRestaurantAdmin



  
 
  
  
} from './controller'

const router = new Router()
//localhost:9090/RestaurantAdmin
router.post('/',/*checkAuth(true),*/create)

// //PUT Request http://localhost:9090/RestaurantAdmin/123
router.put('/:id', update)

// //GET Request http://localhost:8080/RestaurantAdmin/search
 router.get('/search', searchRestaurantAdmin)

// //GET Request http://localhost:9090/RestaurantAdmin
 router.get('/', index)

// //GET Request http://localhost:9090/RestaurantAdmin/123
 router.get('/:id', show)

// //DELETE Request http://localhost:9090/RestaurantAdmin/123
 router.delete('/:id', destroy)





export default router