const jwt = require('jsonwebtoken')
const secretKey= '##@$%^#%&#&$#%3635Ggwgy6#^#%^#&#&*#HY#%%#^#^&#'

module.exports = (req,res,next)=> {
    let token = req.headers['authorization'] || req.cookies?.token;
    console.log(token);
    if(!!token)
    jwt.verify(token,secretKey,(err,data)=>{
        if(err)
        res.send({
            success:false,
            status:500,
            message:'Unauthorized Access'
            })
            else
            req.user= data;
            next()
            })
    else
    res.send({
        success: false,
        status:400,
        message:'No Token Found'
    })        
    }


