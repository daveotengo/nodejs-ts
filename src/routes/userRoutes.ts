import {Router} from 'express';
import {createUser, getUsers,getUser,updateUser,deleteUser} from  '../controllers/userControllers';

const router: Router = Router();
router.post('/', createUser);
router.get('/',getUsers);
router.get('/:id',getUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser)

export default router;