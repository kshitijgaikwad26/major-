const express=require('express');
const AppointmentModel= require('../model/AppointmentModel')
require('../dbConfig/dbConnect')
const ex=express();

 const cors=require('cors')

ex.use(express.json())
 ex.use(cors())
ex.post('/insertAppointment',async(req,resp)=>{
    const Appointment=new AppointmentModel(req.body);
    const result=await Appointment.save();
    resp.send(result)
    console.log(result);
})
ex.get('/getAppointment',async(req,resp)=>{
    const result=await AppointmentModel.find()
    console.log(result);
    resp.send(result)
})

ex.put('/updateAppointment/:_id',async(req,resp)=>{
    const result=await AppointmentModel.updateOne(
        {'_id':req.params._id},
        {
            $set:req.body
        }
    )
    resp.send(result)
})



ex.delete('/deletetest/:_id',async(req,resp)=>{
    const result=await AppointmentModel.deleteOne({
        '_id':req.params._id
    })
    resp.send(result);
}
)
/////-------Cards--------////////
const CardsModel= require('../model/CardsModel')
ex.post('/insertCard',async(req,resp)=>{
    const CardModel=new CardsModel(req.body);
    const result=await CardModel.save();
    resp.send(result)
    console.log(result);
})

ex.get('/getCards',async(req,resp)=>{
    const result=await CardsModel.find()
    console.log(result);
    resp.send(result)
})


///-----register------//////
const RegisterModel=require('../model/RegisterModel')
ex.post('/register',async(req,resp)=>{
//     [
//         body('name', 'name must have atleast 10 character and not contain digits'),
//         body('email', 'invaild email').isEmail().notEmpty(),
//         body('password', 'invaild password').isLength(8).notEmpty(),
//         body('contact', 'invaild contact').isNumeric().isLength({min:10,max:10}).notEmpty()
//     ],
//     const errors=validationResult(req);
//     if(!errors.isEmpty()){
//         return resp.json({errors: errors.array()});
//     }
//     const {confirmPassword, password}=req.body
//         if(confirmPassword!=password){
//             return resp.json({error:"password mismatch"})
//         }
//     let user= await Register.findOne({"email":req.body.email})
//     if(user){
//         return resp.json({"error":"Email already exists"})
//     }
//     user= await User.create({
//         "name":req.body.name,
//         "email":req.body.email,
//         "password":req.body.password,
//         "confrimPassword":req.body.confirmPassword,
//         "contact":req.body.contact

//     })
//     resp.json(user)
//     console.log(result);
// })
    
    const Register=new RegisterModel(req.body);
    const result=await Register.save();
    resp.send(result)
    console.log(result);
})
ex.get('/signIn',async(req,resp)=>{
    const result=await RegisterModel.findOne()
    console.log(result);
    resp.send(result)
})

ex.listen(4000)