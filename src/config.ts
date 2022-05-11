import dotenv from "dotenv";
import { logger } from "@/utils/serviceLog";
dotenv.config();

logger("DotEnv", "ready", "✨", "😃");

const AppConfig = {
	PORT: +process.env.SERVER_PORT || 8080,
	MONGODB_HOST: process.env.MONGODB_HOST,
	JWT_SECRET: process.env.JWT_SECRET || "HelloWorld",
	isDev: process.argv.includes(`--dev`),
};

console.log(AppConfig.isDev);

export default AppConfig;
