const router = require('express').Router();

router.get('/coupons', function (req, res) {
    res.send('Coupons retrieved and statistics');
}); 

module.exports = router;
