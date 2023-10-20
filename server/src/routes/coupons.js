const controller = require('../controllers/coupons');
const validation = require('../middlewares/validation')
const router = require('express').Router();

router.get('/coupons', controller.getAllCoupons); 
router.get('/coupons/type/:type', validation.isTypeValid, controller.getCouponsByType); 
router.get('/coupons/retailer/:retailer', controller.getCouponsByRetailer); 

module.exports = router;
