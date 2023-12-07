import { useState, useEffect } from "react"
import Markdown from "react-markdown"
import style from '../styles/markdown.module.css'

export default function About() {

  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch('./pages/about.md')
    .then(response => response.text())
    .then(text => setMarkdown(text))
  })

  return (
    
        <Markdown className={style.general} children={markdown}/>
    
  )
}


