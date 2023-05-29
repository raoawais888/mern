
const UserModel = require("../Models/UserModel.js")
  const Hash = require("../Helper/Hashpassword.js")
class AuthController{
 
    static register = async (req,res)=>{
        try {
            
           const {name,email,password} = req.body;
                console.log(req.body);

            //   field check 

            if(!name || !email || !password){
                res.json({status:"failed" , "msg":"All field Required"});
            }

        //    email check 

          const emailCheck = await UserModel.findOne({email:email});
          if(emailCheck){

            res.json({status:"failed","msg":"Email Already Exist"});

          }

          const hashing = await  Hash.Hashpassword(password);

          const userDoc = UserModel({
            name:name,
            email:email,
            password:hashing

          })

          await userDoc.save();

          res.json({"status":"success","msg":"User Registration Sucessfully"});
          

          



        } catch (error) {
            console.log(error);
        }
    }


    static login = async(req,res)=>{
      try {
        console.log(req.body);
          const {email , password} = req.body;
           
          

      } catch (error) {
        
        console.log(error);
      }
    }


}

module.exports = AuthController;