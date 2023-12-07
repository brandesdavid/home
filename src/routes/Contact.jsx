import { useState, useEffect } from "react"
import Markdown from "react-markdown"
import style from '../styles/markdown.module.css'

export default function Contact() {
  const [markdown, setMarkdown] = useState('')

    useEffect(() => {
      fetch("./pages/contact.md")
      .then(response => response.text())
      .then(text => setMarkdown(text))
    }

  )
  return (
    <Markdown className={style.contact} children={markdown} />
  )
}


