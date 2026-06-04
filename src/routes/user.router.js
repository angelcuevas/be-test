import {Router} from 'express';
import UserSertice from '../services/user.servcice.js';
import validatePaginationMiddleware from '../middlewares/validatePagination.middleware.js';

const userRouter = Router();

userRouter.get('/',validatePaginationMiddleware,(req, res, next)=>{
    try {
        const result = UserSertice.getAllUsers(req.query.page, req.query.limit); 
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error);
    }
})

export default userRouter; 