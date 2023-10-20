const HOSTNAME = "http://localhost:8080";

export const getCouponsData = async () => {
  const res = await fetch(`${HOSTNAME}/api/coupons`);
  return res.json();
};

export const getCouponsByRetailer = async (retailer) => {
  const res = await fetch(`${HOSTNAME}/api/coupons/retailer/${retailer}`);
  return res.json();
};