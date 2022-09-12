const passwordSchema = require('../models/password');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({ message: 'The password must be at least 10 characters with 1 capital and 1 number.' });
    } else {
        next();
    }
};