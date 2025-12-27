const { Router } = require("express");
const { createUser, login } = require("../controllers/user.controller");

const USER_ROUTER = Router();



USER_ROUTER.post("/createUser", createUser)
USER_ROUTER.post("/login", login)

module.exports = USER_ROUTER;
