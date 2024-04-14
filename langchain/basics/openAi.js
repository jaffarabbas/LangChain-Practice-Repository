import dotenv from 'dotenv';
import { OpenAI } from '@langchain/openai';

dotenv.config();

var key = process.env.OPEN_API_KEY;

const llm = new OpenAI({
    openAIApiKey: key,
});

const responce = await llm.invoke("")

console.log(responce)