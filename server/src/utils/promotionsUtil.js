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

  module.exports = {calculatePromotionStatistics}
