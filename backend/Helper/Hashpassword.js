const bcrypt = require("bcrypt");

class Hashpassword {
   
     static Hashpassword = async (password)=> {    
       try {
        return await bcrypt.hash(password , 10);
       } catch (error) {
        console.log(error);
       }            
 

     }

}

module.exports = Hashpassword;



