import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
});