const data = require('../resources/coupons.json')

const calculatePromotionStatistics = (coupons) => {
    const minValue = Math.min(...coupons.map(item => item.value));
    const maxValue = Math.max(...coupons.map(item => item.value));
    const totalValue = coupons.reduce((sum, item) => sum + item.value, 0);
    const averageValue = Math.floor(totalValue / coupons.length);

    return {
        min: minValue,
        max: maxValue,
        total: coupons.length,
        avg: averageValue,
    };
}

exports.getAllCoupons = async (req, res, next) => {
    try {
        const promotionTypes = ["percent-off", "buy-one-get-one", "dollar-off", "free-gift", "free-shipping"];
        const promotionsPerType = promotionTypes.map((type) => {
            const couponsPerType = data.coupons.filter((coupon) => coupon.promotion_type === type);
            const statistics = calculatePromotionStatistics(couponsPerType);
            return { type_name: type, ...statistics };
        });

        res.status(200).json({ status: 'success', promotionsPerType });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'An error occurred while retrieving all coupons.', error: error.message });
    }
};

exports.getCouponsByType = async (req, res, next) => {
    try {
      const { type } = req.params;
      const couponsPerType = data.coupons.filter((coupon) => coupon.promotion_type === type);
      if (couponsPerType.length) {
        const statistics = calculatePromotionStatistics(couponsPerType);
        res.status(200).json({ status: 'success', promotionsPerType: [{ type_name: type, ...statistics }] });
      } else {
        res.status(404).json({ status: 'success', message: 'No promotions found for this promotion type' });
      }
    } catch (error) {
      res.status(500).json({ status: 'error', message: `An error occurred while retrieving the coupons of type ${type}`, error: error.message });
    }
  };

  exports.getCouponsByRetailer = async (req, res, next) => {
    try {
      const { retailer } = req.params;
      const filteredByRetailer = data.coupons.filter((c) => c.webshop_id === retailer);
  
      if (!filteredByRetailer.length) {
        res.status(400).json({ status: 'error', message: `No coupons found for this retailer (${retailer})` });
      } else {
        const uniquePromotionTypes = filteredByRetailer.reduce((types, coupon) => {
          if (coupon.promotion_type && !types.includes(coupon.promotion_type)) {
            types.push(coupon.promotion_type);
          }
          return types;
        }, []);
  
        const promotionsPerRetailerAndType = uniquePromotionTypes.map((type) => {
          const couponsPerType = filteredByRetailer.filter((coupon) => coupon.promotion_type === type);
          const statistics = calculatePromotionStatistics(couponsPerType);
          return { type_name: type, ...statistics };
        });
  
        res.status(200).json({ status: 'success', promotionsPerRetailerAndType, retailer });
      }
  
    } catch (error) {
      res.status(500).json({ status: 'error', message: `An error occurred while retrieving the coupons for this retailer (${retailer})`, error: error.message });
    }
  };
