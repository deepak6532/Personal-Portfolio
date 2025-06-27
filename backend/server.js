const express =  require("express")
const mongoose = require("mongoose")

const cors = require("cors")
const env =  require("dotenv")
env.config()


const app = express()
const port = 8082

app.use(express.json())
app.use(cors())

const mongoURL = "mongodb://localhost:27017/portfolio"
mongoose.connect(mongoURL)

const router = require("./Router/user")

app.use("/user",router)


app.listen(port ,()=>{
    console.log("server is running on this port ",port)
})





