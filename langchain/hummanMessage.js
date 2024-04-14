import dotenv from 'dotenv';
import { ChatOpenAI } from "@langchain/openai";
import {SystemMessage, HumanMessage} from "@langchain/core/messages";
dotenv.config();
var key = process.env.OPEN_API_KEY;
const chat = new ChatOpenAI({
    openAIApiKey:key
})

const message = [
    new SystemMessage("You are a programmer"),
    new HumanMessage("beneifits of js?")
]

const responce = await chat.invoke(message)

console.log(responce)