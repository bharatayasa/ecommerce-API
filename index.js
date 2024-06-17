const express = require('express')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const User = require('./models/users');

const app = express();
app.use(bodyParser.json());
dotenv.config();

// Synchronize all models
sequelize.sync().then(() => {
        console.log('Database & tables created!');
    });

app.get('/', (req, res) => {
    res.send("jalan wid")
})

// Read all Products
app.get('/users', async (req, res) => {
    try {
        const products = await User.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const port = process.env.PORT
const host = process.env.HOST

app.listen(port, host, () => {
    console.log(`server up and running at http://${host}:${port}`);
})
