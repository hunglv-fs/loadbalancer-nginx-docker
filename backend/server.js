require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const os = require('os');

const app = express();
const PORT = 5000;
const SECRET_KEY = process.env.SECRET_KEY || 'my_secret_key';

app.use(express.json()); // Middleware to parse JSON body
app.use(cors()); // Middleware to enable CORS

// API login return JWT token
app.post('/login', (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }

    const user = { username }; // Mock user
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
});

// Middleware check JWT
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
        next();
    });
};

// this API is protected by JWT
app.get('/protected', authenticateJWT, (req, res) => {
    const message = `Welcome to the protected route! from OS: ${os.hostname()}`;
    res.json({ message: message, user: req.user });
});

// Home route
app.get('/', (req, res) => {
    const message = `Welcome to the Home route! from OS: ${os.hostname()}`;
    res.json({ message: message });
});

// 🟢 Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
