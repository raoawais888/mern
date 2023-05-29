const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
      
    destination:(req,file,cb)=>{
        cb(null,path.join(process.cwd(),"public/uploads"));
    },
    filename:(req,file,cb)=>{

        const u_file = Date.now()+"-"+file.originalname;
        cb(null,u_file);
    }

})

const upload = multer({storage:storage});


module.exports = upload;