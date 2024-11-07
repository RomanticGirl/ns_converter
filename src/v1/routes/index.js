const express = require('express');
const router = express.Router();
const axios = require('axios');

console.log(axios.isCancel('something'));

router.route('/').get((req, res) => {
    res.send(`${req.baseUrl} is workeing`);
});

async function getUser() {
    try {
        const response = await axios.get('http://www.cbr.ru/scripts/XML_daily.asp');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}


module.exports = router;