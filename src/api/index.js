import { Router } from 'express'

 import customer from './customer'
import RestaurantAdmin from './RestaurantAdmin'
import menu from './menu'
import order from './order'
import users from './users'
import rating from './rating'
import admin from './admin'

const router = new Router()

 router.use('/customer', customer)
router.use('/RestaurantAdmin',RestaurantAdmin)
router.use('/menu',menu)
router.use('/order',order)
router.use('/users',users)
router.use('/rating',rating)
router.use('/admin',admin)

export default router
