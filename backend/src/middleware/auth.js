const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        try {
            const token = authHeader.split(' ')[1];
            const decodedToken = jwt.verify(token, process.env.SECRET);
            const userId = decodedToken.userId;
            req.userId = userId;
            next();
        } catch (err) {
            res.status(401).json({ msg: "Token is not valid"});
        }
    } else {
        res.status(401).json({ msg: "No token, authorization denied"});
    }
};
