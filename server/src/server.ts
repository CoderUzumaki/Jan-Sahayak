import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Jan Sahayak Backend is running!");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
	try {
		await connectDB();
		app.listen(PORT, () => {
			console.log(`Server is running on http://localhost:${PORT}`);
		});
	} catch (error) {
		console.error("Error starting the server:", error);
		process.exit(1);
	}
};

startServer();