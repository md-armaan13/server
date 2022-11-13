const express= require('express');
const dotenv = require('dotenv');
dotenv.config();

const app= express();
const port=process.env.PORT;
const db= require('./config/mongoose');
console.log(process.env.PORT);
// INCLUDING COOKIE PARSER TO ACCESS THE COOKIES
const cookieParser= require('cookie-parser');
// TO READ POST REQUEST 
app.use(express.urlencoded());
app.use(express.json());
// MIDDLEWARE TO USE COOKIE
app.use(cookieParser());

//just after the views 



// using express router 
app.use('/',require('./routes/index')); 





app.listen(port,function(err) {

    if(err) { 
        //console.log ('Error in running the server ' , err ) ;
            console.log(`Error in running the server : ${err}`); // backtick "Interpolation"
    }
   // console.log ( ' Yup ! My Express Server is running on Port : ' , port ) ;
        console.log(`My Express Server is running on Port : ${port}`);
} ) ;