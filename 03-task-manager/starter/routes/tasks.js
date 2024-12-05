const express = require('express');
const router = express.Router();

console.log(`express: ${express}  "   " router: ${router}`);


router.route('/').get((req,res) => {
    res.send('All item')
})

module.exports = router