var express = require("express");
var router = express.Router();
const request = require("request");

router.get("/", async (req, res) => {
request("https://api.thedogapi.com/v1/images/search", function (error, response, body) {
if (!error && response.statusCode == 200) {
const data = JSON.parse(body);
res.json(data);
} else {
        res.status(500).json({ error: "Failed to fetch data" });
        }
    });
});

module.exports = router;