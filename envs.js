import { config } from "dotenv";
import env from "env-var";

const { get } = env;

const envFilePath = ".env." + process.env.NODE_ENV;

config({
  path: envFilePath,
});

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("Loading env file:", envFilePath);
console.log("TG_TOKEN:", process.env.TG_TOKEN);

export const TG_TOKEN = get("TG_TOKEN").required().asString();
export const CHAT_ID = get("CHAT_ID").required().asString();
