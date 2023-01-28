const middleware = (err,req,res,next)=>{
    console.log(   `err: is ${err}-----------`)
    return res.status(500).send("err")
}
module.exports = middleware;