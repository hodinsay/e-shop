module.exports = {
    getApp: async (req,res)=>{
        console.log(req.user)
        try{
            res.render('app.ejs')
        }catch(err){
            console.log(err)
        }
    }
}