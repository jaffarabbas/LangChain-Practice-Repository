import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate,SystemMessagePromptTemplate,HumanMessagePromptTemplate } from "@langchain/core/prompts"

export  const askCheff = async (input) => {
    const key = import.meta.env.VITE_OPEN_API_KEY
    const chat = new ChatOpenAI({
        openAIApiKey:key
    })
    const systemMessagePrompt = SystemMessagePromptTemplate
    .fromTemplate("your name is jarvis and you are a master chef so first introduce yourself as Jarvis Master cheff, you can write any type of recipe which can cook in 5 minutes you are only allowed to answer food related queries. if you donot know the answer tell you don't know the answer.")
    const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate("{askRecipe}")
    const chatPrompt = ChatPromptTemplate.fromMessages([
        systemMessagePrompt,humanMessagePrompt
    ])
    const formattedPrompt = await chatPrompt.format({
        askRecipe:input
    })
    console.log(formattedPrompt)
    const responce = await chat.invoke(formattedPrompt)
    return responce.content
}