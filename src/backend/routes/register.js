const express = require('express');
const bcrypt = require('bcrypt');
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

router.post('/register', async (req, res) => {
    const {email, password} = req.body;

    try
    {
        // check if a user with the same email exists already
        let existingAccounts = await getExistingAccounts(email);
        if (existingAccounts.count > 0)
        {
            return res.status(400).json({message: 'User already exists'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        createAccount(email, hashedPassword);
        
        const newUserID = existingAccounts[0].id;
        
        // Respond with success if everything goes well
        return res.status(201).json({message: 'User registered successfully', userId: newUserID});
    } catch (error)
    {
        // If something went wrong, return an error
        console.error('Error during registration:', error);
        return res.status(500).json({message: 'Error registering user', error});
    }
});

async function getExistingAccounts (email)
{
    const existingAccounts = await sql`SELECT * FROM users WHERE email = ${email}`;
    console.log(existingAccounts);
    return existingAccounts;
}

async function createAccount (email, hashedPassword)
{
    const result = await sql`INSERT INTO users (email, password, isadmin, lastupd_usr, lastupd_ts) values (${email}, ${hashedPassword}, FALSE, ${email}, CURRENT_TIMESTAMP)`;
    return result;
}

module.exports = router;