const express = require('express')
const dotenv = require('dotenv');
const connection = require('./config/db');

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("jalan wid")
})

app.get('/products', async(req, res) => {
    const sql = "SELECT * FROM products"; 

    try {
        const data = await new Promise((resolve, reject) => {
            connection.query(sql, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
        })
        
        if (data.length === 0) {
            return res.status(404).json({
                message: "data not found", 
                data: data
            })
        }
        
        return res.status(200).json({
            message: "success to get data", 
            data: data
        })
    } catch (error) {
        return res.status(500).json({
            message: "internal server error", 
            error: error
        })
    }
})

const port = process.env.PORT
const host = process.env.HOST

app.listen(port, host, () => {
    console.log(`server up and running at http://${host}:${port}`);
})
