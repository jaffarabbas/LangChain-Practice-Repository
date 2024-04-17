import dotenv from 'dotenv';
import { ChatOpenAI } from "@langchain/openai";
import { TextLoader } from "langchain/document_loaders/fs/text" 
import { PDFLoader } from "langchain/document_loaders/fs/pdf" 
import {ChatPromptTemplate} from "@langchain/core/prompts";

dotenv.config();
var key = process.env.OPEN_API_KEY;

const chat = new ChatOpenAI({
    openAIApiKey:key
})

// const loader = new TextLoader("data/test.txt")
// const data = await loader.load()

// const loader = new PDFLoader("data/test.pdf")
// const data = await loader.load()

// console.log(data)

const loader = new TextLoader("data/test.txt")
const data = await loader.load()

const docData = data[0].pageContent

const humanTemplate = "{question}\n{format_instruction}"
const chatPrompt = ChatPromptTemplate.fromMessages([
    ["human",humanTemplate]
])

const formattedTemplate = await chatPrompt.format({
    question:"how to play cs?",
    format_instruction:docData
})

const responce = await chat.invoke(formattedTemplate)

console.log(responce.content)