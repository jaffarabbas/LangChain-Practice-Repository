import dotenv from 'dotenv';
import { ChatOpenAI, OpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts"
dotenv.config();
var key = process.env.OPEN_API_KEY;

const llm = new OpenAI({
    openAIApiKey:key
})

const promptTemplate  = PromptTemplate.fromTemplate("Tell me trick of {language}")
const formattedPrompt = await promptTemplate.format({
    language:"C#"
})

console.log(formattedPrompt)

const responce = await llm.invoke(formattedPrompt)
console.log(responce)