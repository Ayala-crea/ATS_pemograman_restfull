const express = require('express');
const router = express.Router();
const makanaController = require('../controller/makananController');

router.get("/", makanaController.getAllMakanan);
router.post("/", makanaController.createDataMakanan);
router.get("/:Id", makanaController.getMakananById);
router.delete("/:Id", makanaController.deleteDataMakanan);
router.put("/:Id", makanaController.updateDataMakanan);

module.exports = router;