const express= require("express");
const { Registration } = require("../controllers/user.controller");
const { Login } = require("../controllers/user.controller");
const { GetAllUsers } = require("../controllers/user.controller");
const { isAdmin } = require("../middlewares/isAdmin");

const userRoutes= express.Router();
userRoutes.post("/registration", Registration);
userRoutes.post("/login", Login)
userRoutes.get("/",isAdmin, GetAllUsers)
 module.exports= userRoutes;