import dotenv from 'dotenv';
import { ChatOpenAI, OpenAI } from "@langchain/openai";
import { HumanMessagePromptTemplate,SystemMessagePromptTemplate,ChatPromptTemplate } from "@langchain/core/prompts"
import {DatetimeOutputParser,CommaSeparatedListOutputParser,StructuredOutputParser} from "langchain/output_parsers"
dotenv.config();
var key = process.env.OPEN_API_KEY;

const chat = new ChatOpenAI({
    openAIApiKey:key
})


// const dateTimeParse = new DatetimeOutputParser()
// console.log(dateTimeParse.getFormatInstructions())

// const commaSeparatedListParse = new CommaSeparatedListOutputParser()
// console.log(commaSeparatedListParse.getFormatInstructions())

// const structuredOutputParser = new StructuredOutputParser()
// console.log(structuredOutputParser.getFormatInstructions())

var type = "structured"

if(type == "date"){
    const dateTimeParse = new DatetimeOutputParser()
    const humanTemplate = "{request} {format_instruction}"
    
    const HumanMessagePrompt = HumanMessagePromptTemplate.fromTemplate(humanTemplate)
    
    const chatPrompt = ChatPromptTemplate.fromMessages([
        HumanMessagePrompt,
    ])
    
    const formatedPrompt = await chatPrompt.format({
        request:"What was the time when world war 1 started?",
        format_instruction:dateTimeParse.getFormatInstructions()
    })
    
    const responce = await chat.invoke(formatedPrompt)
    
    console.log(new Date(responce.content).toLocaleString())
}else if(type == "structured"){
    const structuredOutputParser = StructuredOutputParser.fromNamesAndDescriptions({
        answer:"Answer to user question",
        source:"source use to answer user question, should be a website"
    })
    const humanTemplate = "{request} {format_instruction}"
    
    const HumanMessagePrompt = HumanMessagePromptTemplate.fromTemplate(humanTemplate)
    
    const chatPrompt = ChatPromptTemplate.fromMessages([
        HumanMessagePrompt,
    ])
    
    const formatedPrompt = await chatPrompt.format({
        request:"What was the time when world war 1 started?",
        format_instruction: structuredOutputParser.getFormatInstructions()
    })
    
    const responce = await chat.invoke(formatedPrompt)
    
    console.log(responce.content)
}else{

}
