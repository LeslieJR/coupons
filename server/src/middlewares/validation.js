const { PROMOTIONTYPES } = require('../constants');
const isTypeValid = async (req, res, next) => {
    try {
        const { type } = req.params;
        const isValidPromotionType = type ? PROMOTIONTYPES.includes(type) : false;

        if (!isValidPromotionType) {
            return res.status(400).json({ status: 'error', message: 'Invalid promotion type' });
        }
        next();
    } catch (error) {
        return res.json({ error: error.message });
    }
};

module.exports = {
    isTypeValid
}