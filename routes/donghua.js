const express = require("express");
const { getDonghuaList, getDonghuaDetail, getDonghuaEpisode } = require("../controllers/donghuaController");

const router = express.Router();

// List semua donghua
router.get("/", getDonghuaList);

// Detail 1 donghua
router.get("/:id", getDonghuaDetail);

// Ambil link episode
router.get("/:id/eps/:ep", getDonghuaEpisode);

module.exports = router;
