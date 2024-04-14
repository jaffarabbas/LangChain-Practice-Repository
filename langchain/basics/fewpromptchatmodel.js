import dotenv from 'dotenv';
import { OpenAI } from '@langchain/openai';
import { ChatPromptTemplate,FewShotChatMessagePromptTemplate,PromptTemplate} from '@langchain/core/prompts'
dotenv.config();

var key = process.env.OPEN_API_KEY;

const llm = new OpenAI({
    openAIApiKey: key,
});

const examples = [
    {
        "input": "2+2",
        "output": "4"
    }
]

const examplePrompt = ChatPromptTemplate.fromMessages([
    ["human","{input}"],
    ["ai","{output}"]
])

const prompt = new FewShotChatMessagePromptTemplate({
    examplePrompt,
    examples,
    inputVariables : ["input"],
})

const finalPrompt = ChatPromptTemplate.fromMessages([
    ["system","you are helpful math problem solver"],
    prompt,
    ["human","{input}"]
])

const myprompt = await finalPrompt.format({
    input:"What is your square of 2"
})

console.log(myprompt)

const responce = await llm.invoke(myprompt)

console.log(responce)