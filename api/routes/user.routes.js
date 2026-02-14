const { Router } = require("express");
const { createUser, login, UpdateUser } = require("../controllers/user.controller");

const USER_ROUTER = Router();



USER_ROUTER.post("/createUser", createUser)
USER_ROUTER.post("/login", login)
USER_ROUTER.post("/UpdateUser", UpdateUser)
module.exports = USER_ROUTER;

module.exports = USER_ROUTER;
