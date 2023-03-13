const JWT = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authtoken = req.headers.token;

    if (authtoken) {
        const token = authtoken.split(' ')[1]

        JWT.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                res.status(401).json('Token is not vaild');
            }
            req.user = user;
            next();
        })
        
    } else {
        res.status(404).json('You are not authenticated');
    }
}

module.exports = verifyToken;