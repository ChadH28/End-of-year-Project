const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if not token
    if (!token) {
        return res.status(401).json({ msg: 'No token, no access' });
    }
    // verifying the token if valid or not 
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        // setting user to the unique token
        req.user = decoded.user;
        next();
    }
     catch (err) {
        res.status(401).json({ msg: 'Token is not valid or has expired' });
    }
};