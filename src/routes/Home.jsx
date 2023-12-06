import { useState, useEffect } from "react"
import Markdown from "react-markdown"

export default function Home() {

  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch('./pages/home.md')
    .then(response => response.text())
    .then(text => setMarkdown(text))
  })

  return (
    
        <Markdown children={markdown}/>
    
  )
}


