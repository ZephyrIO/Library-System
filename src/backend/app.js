const express = require('express');
const cors = require('cors');
require('dotenv').config();

const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow necessary methods
    credentials: true, // Include credentials if needed
}));

app.use('/api', registerRouter); // Register Route
app.use('/api', loginRouter); // Login Route

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

/**
 * The database should be designed as follows:
 * Table: users
 * ----> id : serial PRIMARY
 * ----> email : varchar
 * ----> password : varchar
 * ----> isAdmin : boolean
 * ----> lastUpd_Usr : varchar
 * ----> lastUpd_TS : timestamp (without timezone)
 * Table: items
 * ----> id : serial PRIMARY
 * ----> title : varchar
 * ----> type : varchar
 * ----> creator : varchar
 * ----> release_date : timestamp (without timezone)
 * ----> lastUpd_Usr : varchar
 * ----> lastUpd_TS : timestamp (without timezone)
 * Table: item_ledger
 * ----> ledger_id : serial PRIMARY
 * ----> item_id : integer FOREIGN
 * ----> user_id : integer FOREIGN
 * ----> checkout_TS : timestamp (without timezone)
 * ----> checkin_TS : timestamp (without timezone) NULLABLE
 * ----> lastUpd_Usr : varchar
 * ----> lastUpd_TS : timestamp (without timezone)
 */