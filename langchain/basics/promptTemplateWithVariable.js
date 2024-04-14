import dotenv from 'dotenv';
import { ChatOpenAI, OpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts"
dotenv.config();
var key = process.env.OPEN_API_KEY;

const llm = new OpenAI({
    openAIApiKey:key
})

const oneIputPromt  = new PromptTemplate({
    inputVariables :["language"],
    template:"Tell me trick of {language}"
})

const formattedOneInputPrompt = await oneIputPromt.format({
    language:"C#"
})

console.log(formattedOneInputPrompt)

const responce = await llm.invoke(formattedOneInputPrompt)
console.log(responce)