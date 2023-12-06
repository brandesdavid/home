import { useState, useEffect } from "react"
import Markdown from "react-markdown"

export default function Contact() {
  const [markdown, setMarkdown] = useState('')

    useEffect(() => {
      fetch("./pages/contact.md")
      .then(response => response.text())
      .then(text => setMarkdown(text))
    }

  )
  return (
    <Markdown children={markdown} />
  )
}


