import Express from 'express';
import userRouter from './routes/user.router.js';
import errorHadlerMiddleware from './middlewares/errorHandler.middleware.js';


const app = Express();


app.use('/users', userRouter);
app.use(errorHadlerMiddleware)


app.listen(8080, ()=>{
    console.log(`App is up and running on port 8080`)
})