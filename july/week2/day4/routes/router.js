const express = require("express");
const { createUser } = require("../controller/user.controller");

const router = express.Router();

router.post("/user",createUser);

module.exports= router;