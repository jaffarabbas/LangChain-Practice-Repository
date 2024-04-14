import dotenv from 'dotenv';
import { ChatOpenAI, OpenAI } from "@langchain/openai";
import { 
    ChatPromptTemplate,
    PromptTemplate,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate
    } from "@langchain/core/prompts"
import { SystemMessage,HumanMessage } from "@langchain/core/messages"
dotenv.config();
var key = process.env.OPEN_API_KEY;
var type = "system";
const chat = new ChatOpenAI({
    openAIApiKey:key
})


const sys_template = "you are helpful assistant that transalte this {language} to {language2}"
const humman_tempalte = "{text}"

if(type == "tupple"){
    //message as tupple
    var chatPrompt = ChatPromptTemplate.fromMessages([
        ["system",sys_template],
        ["human",humman_tempalte]
    ])
}else if(type == "class"){
    //from classes
    const system = SystemMessagePromptTemplate.fromTemplate(sys_template)
    const human = HumanMessagePromptTemplate.fromTemplate(humman_tempalte)

    var chatPrompt = ChatPromptTemplate.fromMessages([
        system,human
    ])
}else{
    //from prompt template
    const system = new PromptTemplate({
        inputVariables :["language","language2"],
        template:sys_template
    })
    const human = new PromptTemplate({
        inputVariables :["text"],
        template:humman_tempalte
    })
    const systemMessagePrompt = new SystemMessagePromptTemplate({
        prompt:system
    })
    const humanMessagePrompt = new HumanMessagePromptTemplate({
        prompt:human
    })

    var chatPrompt = ChatPromptTemplate.fromMessages([
        systemMessagePrompt,humanMessagePrompt
    ])
}

const formattedPrompt = await chatPrompt.format({
    language:"English",
    language2:"Urdu",
    text:"Hello how are you"
})
    
const responce = await chat.invoke(formattedPrompt)

console.log(responce)

