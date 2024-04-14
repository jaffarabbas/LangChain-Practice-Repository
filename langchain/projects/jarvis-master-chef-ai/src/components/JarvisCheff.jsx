import { useState } from "react"
import { askCheff } from "../utils/askJarvis"

const JarvisCheff = () => {
  const [inputValue, setInputValue] = useState('')
  const [recipe, setRecipe] = useState('')
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(inputValue)
    const res_recipe = await askCheff(inputValue)
    setRecipe(res_recipe)
  }

  return (
    <>
        <h3>Ask Recipe</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter your recipe" />
            <br/>
            <button>Ask</button>
        </form>
        <pre>{recipe}</pre>
    </>
  )
}

export default JarvisCheff