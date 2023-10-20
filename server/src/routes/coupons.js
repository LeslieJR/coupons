const controller = require('../controllers/coupons');
const router = require('express').Router();

router.get('/coupons', controller.getAllCoupons); 
router.get('/coupons/type/:type', controller.getCouponsByType); 
router.get('/coupons/retailer/:retailer', controller.getCouponsByRetailer); 

module.exports = router;
