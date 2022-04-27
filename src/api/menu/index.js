 import { Router } from 'express'
 import {checkAuth} from '../helpers'

 import {
   create,
   index,
  show,
  update,
  destroy,
  searchmenu
  
 } from './controller'

 const router = new Router()

// //POST Request http://localhost:9090/menu
router.post('/', /*checkAuth(true,['RESTAURANTADMIN']),*/create)

// //PUT Request http://localhost:9090/menu/123
 router.put('/:id', update)

// //GET Request http://localhost:8080/menu/search
 router.get('/search', searchmenu)

// //GET Request http://localhost:9090/menu
 router.get('/',checkAuth(true,['RESTAURANTADMIN']),index)

// //GET Request http://localhost:9090/menu/123
 router.get('/:id', show)

// //DELETE Request http://localhost:9090/menu/123
 router.delete('/:id', destroy)


export default router
