import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ENV } from '../dotenv';

// Define the user object type
interface User {
    _id: string;
    name: string;
    email: string;
}

// Generate a JWT token
const generateToken = (user: User): string => {
    const payload = {
        userId: user._id,
        username: user.name,
        email: user.email,
    };

    const secret = ENV.JWT_SECRET; // Retrieve the secret

    if (!secret) {
        throw new Error("JWT_SECRET is not defined in the environment variables.");
    }

    const options = {
        // expiresIn: '1h', // Token expiration time (optional)
    };

    return jwt.sign(payload, secret, options);
};


// Verify a JWT token or Google ID token
const verifyToken = async (req: any, res: Response, next: NextFunction): Promise<void> => {
    const token = req.header('token');
    if (!token) {
        res.status(401).json({ message: 'Access denied. Token is missing.' });
        return console.log('Access denied. Token is missing.');
    }

    try {
        const secret = ENV.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET is not defined in the environment variables.");
        }
        const decoded = jwt.verify(token, secret);
        req.user = decoded as unknown as User;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Access denied. Invalid token' });
        return console.log('Access denied. Invalid tokennnnnn');
    }
};


export { generateToken, verifyToken };
