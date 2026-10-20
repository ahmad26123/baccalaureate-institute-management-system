import User from "../models/Users.js";
// استيراد كافة الدوال المسمّاة تحت اسم معين مثل userService
import * as userService from "../services/userService.js";

export const getAllUsers = async (req, res) => {
    try {
        // استدعاء الدالة من خلال الكائن المجمع
        const users = await userService.getUsers();
        res.json(users);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err.message);
    }
}