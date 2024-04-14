import dotenv from 'dotenv';
import { ChatOpenAI, OpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts"
dotenv.config();
var key = process.env.OPEN_API_KEY;

const llm = new OpenAI({
    openAIApiKey:key
})

const noIputPromt  = new PromptTemplate({
    inputVariables :[],
    template:"Tell me trick of javascript"
})

const formattedNumberInputPrompt = await noIputPromt.format()

console.log(formattedNumberInputPrompt)

const responce = await llm.invoke(formattedNumberInputPrompt)
console.log(responce)