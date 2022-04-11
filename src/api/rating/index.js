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
//localhost:9090/rating
 router.post('/',create)

// //PUT Request http://localhost:9090/rating/123
// router.put('/:id', update)

// //GET Request http://localhost:8080/rating/search
//  router.get('/search', )

// //GET Request http://localhost:9090/rating
//  router.get('/', index)

// //GET Request http://localhost:9090/rating/123
//  router.get('/:id', show)

// //DELETE Request http://localhost:9090/rating/123
//  router.delete('/:id', destroy)





export default router