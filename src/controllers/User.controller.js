import { getConnection } from "./../database/database";

const getUsers = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_user,nombre,apellido,direccion,usuario,password,email FROM user1");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id_user, nombre FROM user1 WHERE id_user = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addUser = async (req, res) => {
    try {
        const { id_user,nombre,apellido,direccion,usuario,password,email } = req.body;

       

        const User = { id_user,nombre,apellido,direccion,usuario,password,email };
        const connection = await getConnection();
        await connection.query("INSERT INTO user1 SET ?", User);
        res.json({ message: "User added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        if (id === undefined || name === undefined || programmers === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const User = { name };
        const connection = await getConnection();
        const result = await connection.query("UPDATE user1 SET ? WHERE id = ?", [User, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM user1 WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
};
