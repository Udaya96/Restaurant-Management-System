import jwt from 'jsonwebtoken'

const SendErrorResponse = (res,code,message) =>{
    res.status(code)
    res.send({error: true,message})
}



export const checkAuth = (authenticationRequired=false,requiredRoles=[]) => (req,res,next)=>  {
    if(authenticationRequired){
        const token = extractToken(req);
        //  console.log(token,'token')
            if(!token){
                SendErrorResponse(res,401,"Unauthenticate User")
             
            }else{
                let user = null;
                try{
                    user = jwt.verify(token, 'Hidden-Key')
                    }
           catch(err){

            SendErrorResponse(res,401,"Unauthenticated User invalid/expired")
           
           }
             if(user){
                 req.user=user;
                    if(requiredRoles && requiredRoles.length> 0){
                        if(requiredRoles.includes(user.role)){
                          
                            next();
                        }else{
                            SendErrorResponse(res,401,"You are not Authorize to perform this action")
                        }
                       
                    }else{
                        next();
                    }
             }else{
                SendErrorResponse(res,401,"Unauthenticated User")
                
             }
            }
          
         }else{
            next();
    }
  
}

function extractToken (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        return req.query.token;
    }
    return null;
}

