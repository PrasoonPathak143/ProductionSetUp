const randomUsername = require("../utils/random-username");

module.exports.home = function(req, res){
    const name = randomUsername();
    res.render("index", {name});
}
