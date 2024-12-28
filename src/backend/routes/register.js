const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const postgres = require('postgres');

require('dotenv').config();
const user = process.env.USER;
const host = process.env.HOST;
const database = process.env.DATABASE;
const password = process.env.PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET || 'fallbackSecret';

const sql = postgres({
    host: host,
    port: 5432,
    database: database,
    user: user,
    password: password,
});

router.post('/register', async (req, res) => {
    const {email, password, confirmPassword} = req.body;

    try
    {
        // check if a user with the same email exists already
        const existingAccounts = getExistingAccounts(email);
        if (existingAccounts)
        {
            return res.status(400).json({message: 'User already exists'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        createAccount(email, hashedPassword);
        
        const newUserID = getUserID(email);
        const verificationToken = jwt.sign({userId: newUserID}, JWT_SECRET, { expiresIn: '1d' });
        
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
    return existingAccounts;
}

async function createAccount (email, hashedPassword)
{
    const result = await sql`INSERT INTO users (email, password, isAdmin, lastUpd_Usr, lastUpd_TS) values (${email}, ${hashedPassword}, FALSE, ${email}, CURRENT_TIMESTAMP)`;
    return result;
}

async function getUserID (email)
{
    const userID = await sql`SELECT id FROM users WHERE email = ${email}`;
    return userID;
}