import mysql from "promise-mysql";
import config from "./../config";

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'pruebaj',
    user: 'root',
    password: ''
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};
