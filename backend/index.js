import express from 'express'
import dotenv from 'dotenv'
import { dbConnection } from './utils/config.js';


const app = express()
const PORT = 8000
dotenv.config();
dbConnection();

app.listen(PORT,() => {
    console.log(`Backend Server is running at PORT ${PORT}`)
})