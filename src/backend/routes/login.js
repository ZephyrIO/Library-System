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

router.post();

module.exports = router;