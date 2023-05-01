const { Router } = require("express");




const router = new Router();

router.get("/", (req, res) => {
    res.render("home", {
        title: "Home",
        message: "Welcome to the home page",
    });
})


module.exports = router;

