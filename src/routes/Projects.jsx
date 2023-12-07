import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import style from '../styles/markdown.module.css'

export default function Projects() {
  // useState erstellt einen neuen Zustand, der in der Variable markdown gespeichert wird
  const [markdown, setMarkdown] = useState('');

  // useEffect ist eine Methode, die ausgeführt wird, wenn die Komponente gerendert wird
  useEffect(() => {
    fetch('./pages/projects.md')
      .then(response => response.text()) // response.text() gibt den Text der Datei zurück
      .then(text => setMarkdown(text)); // setMarkdown aktualisiert den Zustand
  }, []);

  return (
    
    <Markdown className={style} children={markdown} />
    
  );
}