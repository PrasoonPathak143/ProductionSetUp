module.exports = function(req, res, next){
    console.log("Middleware Chala");
    req.randomNumber = Math.random();
    // res.redirect("/");
    next();
}
