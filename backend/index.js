const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
require("dotenv").config();
require('./google-config/passport')(passport);


const PORT = process.env.PORT || 4000;


const allowedOrigins = [
  "http://localhost:5173", // for local dev
  "https://codenest-frontend.vercel.app" // for Vercel frontend
];

app.use(cors({
    origin : allowedOrigins,
    credentials : true
}))
app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize());


const userRouter = require('./routes/user');
const blogRouter = require('./routes/blog');
const interveiwExpRouter = require('./routes/interviewExp');
const moduleRouter = require('./routes/module');
const progressRouter = require('./routes/progress');




app.use("/api/v1" , userRouter);
app.use("/api/v1" , blogRouter);
app.use("/api/v1" , interveiwExpRouter);
app.use("/api/v1" , moduleRouter);
app.use("/api/v1/progress" , progressRouter);


app.listen(PORT , ()=>{
    console.log(`Server is active on port : ${PORT}`);
})

const dbConnect = require('./config/database');
dbConnect();

app.get('/' , (req ,res)=>{
    res.send("Welcome Brother");
})
