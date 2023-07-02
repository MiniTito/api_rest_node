import express from "express";
import mysql from "mysql2";
import conn from "express-myconnection";
//import route from "./routes/index";

const app = express();
const PORT = process.env.PORT || 3000;
const dbConfig = {
    host: process.env.PORT || "localhost",
    port: process.env.PORT || "3306",
    user: process.env.PORT || "root",
    password: process.env.PORT || "root123",
    database: process.env.PORT || "apirestdb"
};

app.use(conn(mysql, dbConfig, "single"));
app.use(express.json());
app.use("/", (req, res) => {
    res.send("BienVenido To Home");
});

app.listen(PORT, () => {
    console.log(`ServidorWeb Running on Puerto: ${PORT}`);
});