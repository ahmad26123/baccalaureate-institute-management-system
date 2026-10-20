import User from "../models/User.js";
import * as userService from "../services/userService.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.json(users);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err.message);
    }
};