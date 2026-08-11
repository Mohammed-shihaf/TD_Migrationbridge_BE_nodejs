"use strict";
const express = require("express");
const { listRoutes, migrationStatus } = require("../data/migration");
const router = express.Router();

router.get("/routes", (req, res) => {
  res.json({ routes: listRoutes() });
});

router.get("/status", (req, res) => {
  res.json(migrationStatus());
});

module.exports = router;
