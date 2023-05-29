require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 6000
const cors = require("cors");
const web = require("./routes/web.js");
const path = require("path");
const DB_CONNECT = require("./db/Connection.js")
  

DB_CONNECT(process.env.DB_URL);

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:false}))



app.use("/api", web);


app.use(express.static(path.join(process.cwd(),"public")));

app.listen(PORT, ()=>{

    console.log(`http://localhost:${PORT}`);
})


