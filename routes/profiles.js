import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get("/", profilesCtrl.indexProfile)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.post("/", checkAuth, profilesCtrl.create)
router.put("/", checkAuth, profilesCtrl.update)
router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)

export { router }
