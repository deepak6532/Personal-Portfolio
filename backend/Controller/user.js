const user=   require("../Model/user")
const nodemailer =  require("nodemailer")



exports.contact = async(req,res)=>{

    const {name,phone,email}=  req.body

    const transporter =   nodemailer.createTransport({
        host:"smtp.gmail.com",
        auth:{
            user:process.env.Email,
            pass:process.env.Password
        }
    })
    const data = {
        name,phone,email
    }
    const result = new  user(data)
    await result.save()

    const info  =  transporter.sendMail({

        from:process.env.Email,
        to:email,
        subject:"contact successfully",
        text:`Thank You ${name} I will contact you asap




Deepak Gupta
Web Developer `
    })

  

    return res.status(202).send({message:"contact successfull",result})
    

}

