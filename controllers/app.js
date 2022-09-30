module.exports = {
    getApp: async (req,res)=>{
        console.log(req.user)
        try{
            res.render('app.ejs', { user: req.user})
        }catch(err){
            console.log(err)
        }
    }
}