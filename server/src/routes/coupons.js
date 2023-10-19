const controller = require('../controllers/coupons');
const router = require('express').Router();

router.get('/coupons', controller.getAllCoupons); 
router.get('/couponsByType/:type', controller.getCouponsByType); 
router.get('/couponsByRetailer/:retailer', controller.getCouponsByRetailer); 

module.exports = router;
