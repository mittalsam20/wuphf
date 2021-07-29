const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan")
const app = express();
const port = process.env.PORT || 5000;

const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useFindAndModify: true, useCreateIndex: true, useUnifiedTopology: true },
    () => console.log("Database Connected successfully..!!"))


//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// API Calling
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/auth", postRoute);





app.listen(port, () => { console.log(`Server started listening at port: ${port}`) })