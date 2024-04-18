const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.registerUser = async(req ,res, next)=>{
    try {
     const {username , password , email} = (req.body);
     const usernameCheck = await userModel.findOne({username});
     if(usernameCheck){
          return res.json({msg: "Username already taken" , status: false});
     }
     const emailCheck = await userModel.findOne({email});
     if(emailCheck){
          return res.json({msg: "Email already used" , status: false});
     }
     const hashedPassword = await bcrypt.hash(password , 10);
     const user = await userModel.create({
          username ,
          email ,
          password: hashedPassword , 
     });
     delete user.password ;
     return res.json({status: true , user});
     
    } catch (error) {
      next(error);
    }

}



module.exports.loginUser = async(req ,res, next)=>{
     try {
      const {username , password} = (req.body);
      const user = await userModel.findOne({username});
      if(!user){
           return res.json({msg: "Incorrect username or password" , status: false});
      }
      const isPasswordValid = await bcrypt.compare(password , user.password);
      if(!isPasswordValid){
          return res.json({msg: "Incorrect username or password" , status: false});
      }
      delete user.password ;
      return res.json({status: true , user});
      
     } catch (error) {
       next(error);
     }
 
 }

module.exports.setAvatar = async(req ,res, next)=>{
     try {
     const userId = req.params.id ;
     const avatarImage = req.body.image ;
     const userData = await userModel.findByIdAndUpdate( userId , {
          isAvatarImageSet: true ,
          avatarImage,   
     });
     return res.json({
          isSet: userData.isAvatarImageSet , image: userData.avatarImage ,
     })

          
     } catch (error) {
          next(error);
     }

}


module.exports.getAllUsers = async(req ,res, next)=>{
     try {
          const userId = req.params.id ;
          const users = await userModel.find({ _id: { $ne: userId } }).select([
               "email" ,
               "username" ,
               "avatarImage" ,
               "_id" 
          ]);
          return(res.json(users));
     } catch (error) {
         next(error);
     }
};
