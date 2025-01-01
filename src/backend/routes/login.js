const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const postgres = require('postgres');

require('dotenv').config();
const user = process.env.USER || 'user';
const host = process.env.HOST || 'host';
const database = process.env.DATABASE || 'database';
const password = process.env.PASSWORD || 'password';
const JWT_SECRET = process.env.JWT_SECRET || 'fallbackSecret';

const sql = postgres({
    host: host,
    port: 5432,
    database: database,
    user: user,
    password: password,
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({msg: 'Please enter all fields.'});
        }

        // Find the user by email
        const accounts = await getAccounts(email);
        if (accounts.count == 0)
        {
            return res.status(400).json({msg: 'User with this email does not exist.'});
        }

        const storedPassword = accounts[0].password;

        // Compare the password with the stored hashed password
        const isMatch = await bcrypt.compare(password, storedPassword);
        if (!isMatch) {
            return res.status(400).json({msg: 'Incorrect password.'});
        }

        // Generate a JWT token
        const userID = accounts[0].id;
        const token = jwt.sign({id: userID}, JWT_SECRET);

        // Respond with the token and user details
        const userIsAdmin = accounts[0].isadmin;
        res.json({
            token,
            user: {
                id: userID,
                email: email,
                isadmin: userIsAdmin,
            },
        });
    } catch (err) {
        res.status(500).json({error: err});
    }
});

async function getAccounts (email)
{
    const existingAccounts = await sql`SELECT * FROM users WHERE email = ${email}`;
    console.log(existingAccounts);
    return existingAccounts;
}

module.exports = router;