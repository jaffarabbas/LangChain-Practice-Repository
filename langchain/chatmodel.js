import dotenv from 'dotenv';
import { ChatOpenAI } from "@langchain/openai";
dotenv.config();
var key = process.env.OPEN_API_KEY;
const chat = new ChatOpenAI({
    openAIApiKey:key
})

const responce = await chat.invoke("Hello, how are you?")

console.log(responce)