
const mongoose = require("mongoose");

  const DB_CONNECT = async (DB_URL)=>{

    try {

        const OPTION ={

            dbName:process.env.DB_NAME
        }

          await mongoose.connect(DB_URL,OPTION);
          console.log("connectiong....")

        
    } catch (error) {
        console.log(error);
    }

  }

  module.exports = DB_CONNECT;