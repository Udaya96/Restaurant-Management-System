import { Router } from 'express'
import { checkAuth } from '../helpers'

import {
  update,
  create,
  login,
  index,
  checkOldPassword,
  changePassword
 
  
  
} from './controller'

const router = new Router()
//localhost:9090/users
router.put('/:id', update)

router.post('/signup', create)

//http://localhost:9090/users/login
router.post('/login',/*checkAuth(true),*/ login)

//GET Request http://localhost:9090/users
router.get('/',index)

//localhost:9090/users/change-password
router.put('/change-password',checkAuth(true),checkOldPassword,changePassword)

export default router
