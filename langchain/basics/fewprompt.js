import dotenv from 'dotenv';
import { OpenAI } from '@langchain/openai';
import { FewShotChatMessagePromptTemplate,PromptTemplate} from '@langchain/core/prompts'
dotenv.config();

var key = process.env.OPEN_API_KEY;

const llm = new OpenAI({
    openAIApiKey: key,
});

const example = [
    {
        "input": "What is your name",
        "output": "My name is Jarvis"
    }
]

const examplePrompt = new PromptTemplate({
    inputVariables : ["input","output"],
    template : "{input} {output}",
})

const prompt = new FewShotChatMessagePromptTemplate({
    examples,
    examplePrompt,
    suffix:"{myinput}",
    inputVariables : ["myinput"],
})

const myprompt = await prompt.format({
    myinput:"What is your name"
})

console.log(myprompt)

const responce = await llm.invoke(myprompt)

console.log(responce)