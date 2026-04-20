const jwt = require('jsonwebtoken');

require('dotenv').config();

const jwtToken = process.env.JWT_SECRET || process.env.jwtToken || process.env.TOKEN;

exports.getToken = (req, res) => {
    if (!jwtToken) {
        return res.status(500).json({ message: 'JWT secret is not configured' });
    }

    const { username, email } = req.query;
    if (!username || !email) {
        return res.status(400).json({ message: 'username and email are required' });
    }

    const token = jwt.sign({ username, email }, jwtToken);
    res.json({ token });
};
