import express from 'express';
import { signout, deleteUser, updateUser,getUser, getUsers } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.delete('/signout', signout);
router.delete('/delete/:userId', verifyToken, deleteUser);
router.put('/update/:userId', verifyToken, updateUser);
router.get('/all', verifyToken, getUsers);
router.get('/:userId', getUser)

export default router;

