const express = require("express");
const router = express.Router();
const atmCardController = require("../controllers/atmCardController");

router.post('/cards/createCard', atmCardController.createAtm);

module.exports = router;