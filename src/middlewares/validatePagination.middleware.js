const validatePaginationMiddleware = (req, res, next)=>{

    const page = Number(req.query.page);
    const limit = Number(req.query.limit); 
    console.log(page, typeof page)
    if(page && !Number.isInteger(page) || page <1 ){
        throw new Error('Invalid pagination parameters')
    }
    if(limit && !Number.isInteger(limit)|| limit <1){
        throw new Error('Invalid pagination parameters')
    }

    next();
}

export default validatePaginationMiddleware; 