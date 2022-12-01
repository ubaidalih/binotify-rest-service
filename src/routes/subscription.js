const router = require("express").Router()
const {authenticateUserToken, authenticateAdminToken} = require("../auth/jwt");
const soap = require('soap')
const url = 'http://localhost:3060/binotify-soap-service/subscription?wsdl'

router.get("/",authenticateAdminToken, (req,res)=>{
    args = {
        arg0 : process.env.REST_API_KEY
    }
    soap.createClient(url, {}, function(err, client) {
        client.getAllRequest(args,function(err, result) {
            return res.json(result['return'])
        })
    })
})

router.post("/approval" ,authenticateAdminToken, async(req,res)=>{
    args ={
        arg0 : req.body.creator_id,
        arg1 : req.body.subscriber_id,
        arg2 : process.env.REST_API_KEY
    }
    soap.createClient(url,{},function(err,client){
        client.approvedSubscript(args,function(err,result){
            return res.json(result['return'])
        })
    })
})

router.post("/reject" ,authenticateAdminToken, async(req,res)=>{
    args ={
        arg0 : req.body.creator_id,
        arg1 : req.body.subscriber_id,
        arg2 : process.env.REST_API_KEY
    }
    console.log(args)
    soap.createClient(url,{},function(err,client){
        client.rejectedSubscript(args,function(err,result){
            return res.json(result['return'])
        })
    })
})


module.exports = router