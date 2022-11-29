const router = require("express").Router()
var soap = require('soap')
var url = 'http://localhost:3060/binotify-soap-service/subscription?wsdl'

router.get("/", (req,res)=>{
    soap.createClient(url, {}, function(err, client) {
        client.getAllRequest(function(err, result) {
            return res.json(result['return'])
        })
    })
})

router.post("/approval" , async(req,res)=>{
    args ={
        arg0 : req.body.creator_id,
        arg1 : req.body.subscriber_id
    }
    console.log(args)
    soap.createClient(url,{},function(err,client){
        client.approvedSubscript(args,function(err,result){
            return res.json(result['return'])
        })
    })
})

router.post("/reject" , async(req,res)=>{
    args ={
        arg0 : req.body.creator_id,
        arg1 : req.body.subscriber_id
    }
    console.log(args)
    soap.createClient(url,{},function(err,client){
        client.rejectedSubscript(args,function(err,result){
            return res.json(result['return'])
        })
    })
})


module.exports = router