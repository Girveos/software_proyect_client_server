const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const response = await axios.get("https://www.datos.gov.co/resource/xdk5-pm3f.json");
    const data = response.data;

    // Get unique department names
    const departments = [...new Set(data.map((item) => item.departamento))];
    const result = {};

    // For each department, get its corresponding municipalities
    for (const department of departments) {
      const municipalities = data
        .filter((item) => item.departamento === department)
        .map((item) => item.municipio);
      result[department] = municipalities;
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
