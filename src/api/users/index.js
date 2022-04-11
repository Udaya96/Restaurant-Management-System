import { Router } from 'express'
import { checkAuth } from '../helpers'

import {
  create,
  login,
  checkOldPassword,
  changePassword
 
  
  
} from './controller'

const router = new Router()

router.post('/signup', create)

//localhost:9090/users/login
router.post('/login', login)

//localhost:9090/users/change-password
router.put('/change-password',checkAuth(true),checkOldPassword,changePassword)

export default router
