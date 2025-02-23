function user(req, res) {
    res.send(req.randomNumber.toString());
}

module.exports = {
    user
}