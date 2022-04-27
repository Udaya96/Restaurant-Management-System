import { Router } from 'express'
import {checkAuth} from '../helpers'
import {
  create,
  signup,
//   index,
//   show,
  // update
//   destroy,
//   searchStudent,
//   ShowMyProfile
} from './controller'

const router = new Router()

//POST Request http://localhost:8080/customer
 router.post('/',/* checkAuth(true, ['CUSTOMER']),*/create)

 router.post('/signup',signup)

// router.get('/me',checkAuth(true),ShowMyProfile)

// //PUT Request http://localhost:8080/customer/123
// router.put('/:id', /*checkAuth(true, ['ADMIN']),*/ update)

// //GET Request http://localhost:8080/customer/search
// router.get('/search', checkAuth(true, ['ADMIN','FACULTY']),searchStudent)

// //GET Request http://localhost:8080/customer
// router.get('/',checkAuth(true, ['ADMIN','FACULTY']), index)

// //GET Request http://localhost:8080/customer/123
// router.get('/:id',checkAuth(true, ['ADMIN','FACULTY']), show)

// //DELETE Request http://localhost:8080/customer/123
// router.delete('/:id',checkAuth(true, ['ADMIN']), destroy)


export default router
